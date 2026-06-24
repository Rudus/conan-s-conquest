DROP POLICY IF EXISTS "Anyone can record a click" ON public.button_clicks;

CREATE POLICY "Anyone can record a known button click"
  ON public.button_clicks FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    button_id IN (
      'wishlist_hero',
      'wishlist_pre_presskit',
      'wishlist_cta',
      'presskit_steam_store',
      'presskit_files',
      'press_contact_email',
      'screenshot_hero',
      'screenshot_combat',
      'screenshot_world',
      'screenshot_army'
    )
  );
