/**
 * Main module to start all application services
 */

import { serve } from "~/web/http.ts"

// Start our web server
Deno.serve({ port: 8080 }, serve)
