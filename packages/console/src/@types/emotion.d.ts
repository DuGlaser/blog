import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      bgColor: string;
      base: string;
      gray: string;
    };
  }
}
