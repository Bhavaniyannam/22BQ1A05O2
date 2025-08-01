import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("s/:shortcode", "routes/shortcode.tsx")
] satisfies RouteConfig;
