declare module 'jaguar:site-data' {
  import type { UserConfig } from 'shared/types';
  const siteData: UserConfig;
  export default siteData;
}

declare module 'jaguar:routes' {
  import type { Route } from 'node/plugin-routes';
  export const routes: Route[];
}
