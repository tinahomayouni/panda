import React from 'react'
import styled from 'styled-components'
import Label from '../Label/Label'
import Option from '../Option/Option'


export const StyledSelectBox = styled.select`
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
}
.icon_arrow {
  border-top:15px solid tomato;
  border-left:10px solid transparent;
  border-right:10px solid transparent;
  position:absolute;
  right:10px;
  top:50%;
  margin-top:-7px;
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
      <option value={undefined} selected disabled>select</option>

      {props.children}
      <span class="icon_arrow"></span>
    </StyledSelectBox>
  )
}
