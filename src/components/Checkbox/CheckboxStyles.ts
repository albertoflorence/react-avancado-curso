import styled, { css } from 'styled-components'
import { CheckboxProps } from './Checkbox'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${theme.colors.darkGray};
    border-radius: 2px;
    position: relative;
    outline: none;

    &::before {
      content: '';
      width: 6px;
      height: 9px;
      border: 2px solid ${theme.colors.white};
      position: absolute;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 5px ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, 'color'>>`
  ${({ theme, color = 'black' }) => css`
    color: ${theme.colors[color]};
    display: inline-flex;
    cursor: pointer;
    gap: ${theme.spacing(1)};
    line-height: 1;
    align-items: center;
  `}
`
