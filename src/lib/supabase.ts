import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'postgresql://postgres:Cilegon/123@db.cbtzdupckshnqgpfijsr.supabase.co:5432/postgres'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNidHpkdXBja3NobnFncGZpanNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NjQ0MTAsImV4cCI6MjA4NjU0MDQxMH0.ElFYabMcHumVAnjGrwxZxxZnuSm6V35eJ4LdkmwA7zw'

export const supabase = createClient(supabaseUrl, supabaseKey)
