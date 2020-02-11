import React from 'react'
import { NextPage } from 'next'
import { useMachine } from '@xstate/react'

import Layout from '../components/Layout'
import Toggle from '../components/Toggle'
import { toggleMachine } from '../machines/toggle'

const IndexPage: NextPage = () => {
  const [current, send] = useMachine(toggleMachine)

  return (
    <Layout title="Next.js + XState">
      <Toggle
        onToggle={() => send('TOGGLE')}
        active={current.matches('active')}
      />
    </Layout>
  )
}

export default IndexPage
