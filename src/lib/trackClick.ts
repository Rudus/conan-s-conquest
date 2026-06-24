import { supabase } from "@/integrations/supabase/client";

/**
 * Fire-and-forget click tracking. Records one row per call into
 * the `button_clicks` table. Errors are swallowed so UI is never blocked.
 */
export const trackClick = (buttonId: string): void => {
  void supabase
    .from("button_clicks")
    .insert({ button_id: buttonId })
    .then(({ error }) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.warn("[trackClick] failed:", error.message);
      }
    });
};
