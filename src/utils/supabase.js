
import { createClient} from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseclient=async(supabseAcessToken)=>{
const supabase = createClient(supabaseUrl, supabaseKey,{
        global:{
            headers:{
                Authorization:`Bearer ${supabseAcessToken}`
            }
        }
})
  
return supabase

};


export default supabaseclient
        