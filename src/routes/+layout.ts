import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import '$lib/supabase';

export const load: LayoutLoad = getSupabase;
