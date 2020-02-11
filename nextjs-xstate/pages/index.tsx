import React from 'react'
import { NextPage } from 'next'
import { useMachine } from '@xstate/react'

import Layout from '../components/Layout'
import Toggle from '../components/Toggle'
import { toggleMachine } from '../machines/toggleMachine'

const IndexPage: NextPage = () => {
  const [toggleCurrent, toggleSend] = useMachine(toggleMachine)

  return (
    <Layout title="Next.js + XState">
      <Toggle
        onToggle={() => toggleSend('TOGGLE')}
        active={toggleCurrent.matches('active')}
      />
    </Layout>
  )
}

export default IndexPage
