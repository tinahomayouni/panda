import React from 'react'
import styled from 'styled-components'
import { Text } from '../index';


export const StyledOption = styled.option`
color: #121921;
`

function Option(props) {
  return (
    <StyledOption>
      {props.children}
    </StyledOption>
  )
}

export default Option
