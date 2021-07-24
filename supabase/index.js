import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ipkegpxxajmfxvjudhzy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzExMTUyNSwiZXhwIjoxOTQyNjg3NTI1fQ.kfvSI1JblKo--kL_WtL0HhTvXpe1elecjMHm4lzKIqs"
export const supabase = createClient(supabaseUrl, supabaseKey)