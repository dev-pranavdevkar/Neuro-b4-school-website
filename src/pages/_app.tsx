import '@/styles/globals.css'
import '@/styles/plugins.css'
import '@/styles/style.css'; 
import '@/styles/templete.css';
import '@/styles/skin/skin-1.css'; 

import '@/plugins/bootstrap-select/bootstrap-select.min.css';
import '@/plugins/slick/slick.min.css';
import 'react-modal-video/css/modal-video.min.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
