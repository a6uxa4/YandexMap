import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { ImagePicker } from '../image-picker/ImagePicker';

const Input = forwardRef((props, ref) => {
    if (props.type === 'file') {
        return <ImagePicker ref={ref} {...props} />;
    }
    if (props.type === 'select') {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <StyledLable htmlFor={props.label}>{props.label}</StyledLable>
                <InputStyledSelect ref={ref} {...props}>
                    <option defaultValue>-</option>
                    {props?.options?.map((option) => (
                        <option
                            key={option.path}
                            value={option.path == null ? '' : option.path}
                            style={{ color: 'black', background: 'white' }}
                        >
                            {option.label}
                        </option>
                    ))}
                </InputStyledSelect>
            </div>
        );
    }
    return (
        <div>
            <StyledLable htmlFor={props.label}>{props.label}</StyledLable>
            <InputStyled
                type={props.type || 'text'}
                onChange={props.onChange}
                value={props.value == null || '' ? '' : props.value}
                placeholder={props.placeholder}
                autoComplete="off"
                disabled={props.disabled}
                notDisabled={props.notDisabled}
                active={props.active}
                ref={ref}
                {...props}
            />
        </div>
    );
});

const StyledLable = styled.label`
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #87939e;
`;

const InputStyled = styled.input`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || ''};
    max-width: ${({ maxWidth }) => maxWidth || '100%'};
    min-width: ${({ minWidth }) => minWidth || '100%'};
    padding: ${({ padding }) => padding || '10px'};
    border-radius: ${({ borderRadius }) => borderRadius || '5px'};
    letter-spacing: 0.6px;
    color: grey;
    font-weight: bold;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    transition: 0.2s;
    background-color: ${({ background }) => background || '#ffffff'};
    border: ${({ border }) => border || '1px solid #ced4da'};
    ::placeholder {
        color: #d0d2d3;
    }
    :active {
        border: ${({ active }) =>
            active ? '1px solid rgba(31, 88, 174, 0.6)' : ''};
    }
    :focus {
        -webkit-box-shadow: 0px 0px 1px 1px rgba(84, 96, 230, 1);
        -moz-box-shadow: 0px 0px 1px 1px rgba(84, 96, 230, 1);
        box-shadow: 0px 0px 1px 1px rgba(84, 96, 230, 1);
    }
    :disabled,
    :disabled:hover {
        opacity: ${({ notDisabled }) => (notDisabled ? '1' : '0.5')};
        cursor: not-allowed;
    }
    -webkit-appearance: none;
    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
const InputStyledSelect = styled.select`
    width: ${({ width }) => width || '100%'};
    min-width: ${({ minWidth }) => minWidth || ''};
    padding: 0.7em 0.8em;
    border-radius: 7px;
    letter-spacing: 0.6px;
    color: grey;
    font-weight: bold;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    transition: 0.2s;
    background-color: #ffffff;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    ::placeholder {
        color: #d0d2d3;
    }
    :active {
        border: 1px solid rgba(31, 88, 174, 0.6);
    }
    :focus {
        border: 1px solid rgba(31, 88, 174, 0.6);
    }
    :disabled,
    :disabled:hover {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
export default Input;
