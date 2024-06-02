import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.'https://omuzatqdobcsbieucqzn.supabase.co';
const supabaseKey = process.env.'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdXphdHFkb2Jjc2JpZXVjcXpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczNTY2NDEsImV4cCI6MjAzMjkzMjY0MX0.4Yu9O10ywVAeL4aQacZAEUWEtp2HOf3CxjUbuSpnC6w';

export const supabase = createClient(supabaseUrl, supabaseKey);
