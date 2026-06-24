CREATE TABLE public.button_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  button_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_button_clicks_button_id ON public.button_clicks(button_id);
CREATE INDEX idx_button_clicks_created_at ON public.button_clicks(created_at);

GRANT INSERT ON public.button_clicks TO anon, authenticated;
GRANT SELECT ON public.button_clicks TO anon, authenticated;
GRANT ALL ON public.button_clicks TO service_role;

ALTER TABLE public.button_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record a click"
  ON public.button_clicks FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read click counts"
  ON public.button_clicks FOR SELECT
  TO anon, authenticated
  USING (true);
