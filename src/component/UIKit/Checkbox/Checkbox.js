import React from 'react';
import styled from 'styled-components'
import { Label } from '../index';


export const StyledCheckbox = styled.input`
  color:#000
`




export default function CheckBox(props) {
  return (
    <div>
      {

        props.label ?
          <Label>
            {props.label}
          </Label> :
          null
      }
      <input
        onChange={(e) => props.onChange(e.target.checked)}
        type="checkbox"

      />
    </div>
  );
}