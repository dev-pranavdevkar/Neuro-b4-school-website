import { Html, Head, Main, NextScript } from 'next/document'
// import ThemeButton from '@/component/Element/ThemeButton/ThemeButton'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <CacheProvider value={cache}>
        <body>

          <Main />
          <NextScript />
          {/* <ThemeButton/> */}
        </body>
      </CacheProvider>
    </Html>
  )
}
