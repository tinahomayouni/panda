import React from 'react';
import styled from "styled-components";
import { Text } from '../index';

export const StyledLabel = styled.label`
    cursor: pointer;
    color: #121921;
    font-size: 14px;
`

export default function Label(props) {
    return (
        <StyledLabel>
            <Text type="p">
                {props.children}
            </Text>
        </StyledLabel>
    );
}