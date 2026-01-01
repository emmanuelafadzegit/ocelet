const SUPABASE_URL = "https://zuotycdpvlcueygrvtix.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1b3R5Y2RwdmxjdWV5Z3J2dGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMzQwMjMsImV4cCI6MjA4MjgxMDAyM30.nF0BVNCESM7eTKnaILYfXqdlSA0TT_ZD4OSCNzOlMNI";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
