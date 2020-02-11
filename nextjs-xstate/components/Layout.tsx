import React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <div>This is header</div>
      <hr />
    </header>
    {children}
    <footer>
      <hr />
      <div>This is footer</div>
    </footer>
  </div>
)

export default Layout
