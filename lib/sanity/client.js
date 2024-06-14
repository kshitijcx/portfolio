import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: "t4dbt619", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: false, 
})