import React, { ReactElement } from 'react'
import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'
import '../styles/footer.css'

import SiteLayout from '../components/Layout'
import { fetcher } from '../libs/fetch'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </SWRConfig>
  )
}

export default MyApp
