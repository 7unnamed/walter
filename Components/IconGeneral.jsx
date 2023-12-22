import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ icono, css }) => {
  return (
    <FontAwesomeIcon icon={icono} className={css} />
  )
}
