/// <reference types="vite/client" />

import { UserInfo } from '@shared/types';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}

declare global {
  declare interface Window {
    user: Omit<UserInfo, 'activeCurrencies'> & { activeCurrencies: string }
  }
}
