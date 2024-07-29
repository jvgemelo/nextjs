// import { createBrowserClient } from '@supabase/ssr'

// export function createClient() {
//   return createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   )
// }
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'http://localhost:54321' // Reemplaza con el puerto correcto
const supabaseKey = 'your-anon-key' // Reemplaza con tu clave anónima

export const supabase = createClient(supabaseUrl, supabaseKey)
