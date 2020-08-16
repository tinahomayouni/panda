import React from 'react'
import styled from 'styled-components'
import Label from '../Label/Label'




const StyledOption = styled.option`
  color: #121921;
`
Option.defaultProps = {
  value: ''
}

export function Option(props) {
  console.log(props, "props option")
  return (
    <StyledOption {...props} >{props.children}</StyledOption>
  )
}

const StyledSelectBox = styled.select`
  #wrap {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -75%);
  }
  select {
    width:200px;
    height:50px;
    font-size:18px;
    border:2px solid #aaa;
    cursor:pointer;
    appearance: none;
    -webkit-appearance: none;
    outline:none;
    padding:0 10px;
  }
  select::-ms-expand {
      display:none;
      position:relative;
  }
 
`
export default function SelectBox(props) {
  return (
    <StyledSelectBox onChange={(e) => props.onChange(e.target.value)}>
      {
        props.label ?
          <Label>
            {props.label}
          </Label>
          : null
      }
      <Option value={undefined} selected disabled>select</Option>

      {props.children}

    </StyledSelectBox>
  )
}
