import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>NextJS and Supabase Auth Boilerplate</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
export default MyApp
