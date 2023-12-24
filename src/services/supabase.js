import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nztzziudkpoojcgssscs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dHp6aXVka3Bvb2pjZ3Nzc2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5NjcwMzksImV4cCI6MjAxMTU0MzAzOX0.miHqrXku-z8cbdF8FSMzV5taGNxcuYgNzsUkszsu-Wo";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
