import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Row = { button_id: string; created_at: string };

const Dashboard = () => {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("button_clicks")
        .select("button_id, created_at")
        .order("created_at", { ascending: false })
        .limit(10000);
      if (error) setError(error.message);
      else setRows(data ?? []);
    })();
  }, []);

  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

  const counts = (rows ?? []).reduce<Record<string, { total: number; week: number }>>(
    (acc, r) => {
      const bucket = (acc[r.button_id] ??= { total: 0, week: 0 });
      bucket.total += 1;
      if (new Date(r.created_at).getTime() >= sevenDaysAgo) bucket.week += 1;
      return acc;
    },
    {}
  );

  const sorted = Object.entries(counts).sort(([, a], [, b]) => b.total - a.total);
  const grandTotal = rows?.length ?? 0;

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2 text-gold-gradient">
          Click Analytics
        </h1>
        <p className="text-muted-foreground mb-10">
          Total button presses recorded across the site.
        </p>

        {error && (
          <div className="border border-destructive/50 bg-destructive/10 text-destructive p-4 rounded-sm mb-6">
            {error}
          </div>
        )}

        {!rows && !error && (
          <p className="text-muted-foreground">Loading…</p>
        )}

        {rows && (
          <>
            <div className="border border-border bg-card/40 rounded-sm p-6 mb-8">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                Total clicks
              </div>
              <div className="font-heading text-4xl text-gold-gradient">{grandTotal}</div>
            </div>

            <div className="border border-border bg-card/40 rounded-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-card/60">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-heading uppercase tracking-wider text-xs text-muted-foreground">
                      Button
                    </th>
                    <th className="px-4 py-3 font-heading uppercase tracking-wider text-xs text-muted-foreground text-right">
                      Last 7d
                    </th>
                    <th className="px-4 py-3 font-heading uppercase tracking-wider text-xs text-muted-foreground text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-4 py-6 text-center text-muted-foreground">
                        No clicks yet.
                      </td>
                    </tr>
                  )}
                  {sorted.map(([id, c]) => (
                    <tr key={id} className="border-t border-border/50">
                      <td className="px-4 py-3 font-mono text-foreground">{id}</td>
                      <td className="px-4 py-3 text-right text-muted-foreground">{c.week}</td>
                      <td className="px-4 py-3 text-right font-semibold text-gold">{c.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
