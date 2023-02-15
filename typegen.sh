#!/bin/bash
# PROJECT_ID=`grep SUPABASE_URL .env | sed 's|.*https://\(.*\)\.supabase\.co.*|\1|' | tr -d '\n'`
# npx supabase gen types typescript --project-id "$PROJECT_ID" --schema public > src/lib/types/supabase.ts
npx supabase gen types typescript --db-url="postgresql://postgres:dsa90wqd89wamHSMABuy989@supabase.miikat.dev:5432" --schema public > src/lib/types/supabase.ts