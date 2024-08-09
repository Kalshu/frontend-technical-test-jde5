import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "https://fetestapi.int.mozzaik365.net/swagger/v1/swagger.json",
  output: "src/client",
});
