import React from 'react'
import styled from 'styled-components'


export const StyledOption = styled.option`
color: #121921;
`
Option.defaultProps = {
  value: ''
}

function Option(props) {
  return (
    <StyledOption {...props} />
  )
}

export default Option
