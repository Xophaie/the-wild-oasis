import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cirumzbxdzewflpjsydj.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcnVtemJ4ZHpld2ZscGpzeWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxOTQ0ODgsImV4cCI6MjAyODc3MDQ4OH0.z9i2BP0JNk71Wycl1f--LcWpQrY32L8JL_ZPKl60Xp8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
