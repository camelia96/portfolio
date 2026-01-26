import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://gdjbqfvypxklniobbydw.supabase.co', process.env.SUPABASE_API!)
