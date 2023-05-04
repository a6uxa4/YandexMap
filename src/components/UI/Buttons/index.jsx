import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
const StyledButton = styled.button`
    width: ${({ width }) => width || '100%'};
    background-color: ${({ backgroundColor }) => backgroundColor || '#5460e6'};
    border-radius: ${({ borderRadius }) => borderRadius || '4px'};
    color: ${({ color }) => color || '#ffffff'};
    font-size: ${({ fontSize }) => fontSize || ''};
    font-weight: ${({ fonWeight }) => fonWeight || '700'};
    padding: ${({ padding }) => padding || '8px 18px'};
    border: ${({ border }) => border || ''};
    margin: ${({ margin }) => margin || ''};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    font-family: 'PT Sans', sans-serif;
    outline: none;
    :hover {
        opacity: 0.9;
    }
    :active {
        color: white;
        background-color: ${({ backgroundColorActive }) =>
            backgroundColorActive || '#434fce'};
    }
    :disabled {
        cursor: not-allowed;
        color: #7e7e7e;
        border: #7e7e7e;
        background: ${({ disabledColor }) => disabledColor || '#1c1b1f1f'};
    }
`;
export default Button;
