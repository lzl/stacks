import React from 'react'

type Props = {
  onToggle(): void
  active: boolean
}

const Toggle: React.FunctionComponent<Props> = ({ onToggle, active }) => {
  return (
    <div>
      <div>
        Toogle status: <span>{active ? 'On' : 'Off'}</span>
      </div>
      <button onClick={onToggle}>Toggle</button>
    </div>
  )
}

export default Toggle
