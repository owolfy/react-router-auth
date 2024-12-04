import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

/**
 * I avoided using flatRoutes to better illustrate how the app's routes are structured.
 */
export default [
  index('routes/home.tsx'),
  layout('components/logged-wrapper.tsx', [
    route('dashboard', 'routes/dashboard.tsx')
  ])
  
] satisfies RouteConfig;
