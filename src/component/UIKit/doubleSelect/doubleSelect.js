import React from 'react';
import { SelectBox } from '../index';
import { Option } from "../SelectBox/SelectBox"

export default function doubleSelect(props) {

  console.log(props)
  const handleChange = (value, accessor) => {
    console.log(value, "value", accessor);
  }
  return (
    <div>
      <p>{props.title}</p>
      <div className="budgetWrp">
        <span>{props.fromTitle}</span>
        <div className="selectWrp">
          <SelectBox onChange={(value) => handleChange(value, 'min')}>
            {props.options.map((option, index) => {
              return <Option key={index} value={option.value}>{option.label}</Option>
            })}
          </SelectBox>
        </div>
        <span>{props.toTitle}</span>
        <div className="selectWrp">
          <SelectBox onChange={(value) => handleChange(value, 'max')}>
            {props.options.map((option, index) => {
              return <Option key={index} value={option.value}>{option.label}</Option>
            })}
          </SelectBox>
        </div>
      </div>
    </div>
  )
}

doubleSelect.defaultProps = {
  title: '',
  fromTitle: "",
  toTitle: '',
  options: []
};