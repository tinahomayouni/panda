import React from 'react';
import styled from "styled-components";


export const StyledSwitch = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  label {
    width: 50%;
    text-align: center;
  }
  input {
    display: none;
  }

  label {
    user-select: none;
    padding: 10px 20px;
    cursor: pointer;
    
  }
  
  input[type="radio"] {
    display: none;
    
    
    &#t1:checked {
      
      ~ .blob {
        background: cornflowerblue;
        animation-name: stretchyRev;
      }
    }
    
    &#t2:checked {
      
      ~ .blob {
        background-color: skyblue;
        animation-name: stretchy;
      }
    }
  }
  
  .blob {
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    z-index: -1;
    border-radius: 4rem;
    animation-duration: .5s;
    animation-direction: forwards;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    transition:
      transform 150ms ease,
      background 150ms ease;
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"><defs><filter id=\"goo\"><feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\" /><feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"goo\" /><feComposite in=\"SourceGraphic\" in2=\"goo\" operator=\"atop\"/></filter></defs></svg>#goo");
    
    &:before, &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      background-color: inherit;
      height: 100%;
      width: 50%;
      border-radius: 100%;
      transform: scale(1.15);
      transition: transform 150ms ease;
      animation-name: pulse;
      animation-duration: .5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    
    &:before {
      left: 0;
      animation-delay: .15s;
    }
    
    &:after {
      right: 0;
    }
  }
`



Switch.defaultProps = {
  lables: ["", ""]
};


function Switch(props) {
  return (
    <StyledSwitch onChange={props.onChange}>
      <label for="t1">{props.labels[0]}</label>
      <input
        id="t1"
        name={props.labels[0]}
        value={true}
        type="radio"
        onChange={(e) => props.onChange(e.target.value)}

      />
      <label for="t2">{props.labels[1]}</label>
      <input
        id="t2"
        name={props.labels[1]}
        value={false}
        checked
        type="radio"
        onChange={(e) => props.onChange(e.target.value)}
      />
      <div></div>
    </StyledSwitch>
  )
}

export default Switch;