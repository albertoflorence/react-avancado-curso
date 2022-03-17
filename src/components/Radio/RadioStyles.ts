import styled, { css } from 'styled-components'
import { RadioProps } from './Radio'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${theme.colors.darkGray};
    border-radius: 50%;
    position: relative;
    outline: none;

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      background: ${theme.colors.primary};
      border-radius: 50%;
      position: absolute;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 5px ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<RadioProps, 'color'>>`
  ${({ theme, color = 'black' }) => css`
    color: ${theme.colors[color]};
    display: inline-flex;
    cursor: pointer;
    gap: ${theme.spacing(1)};
    line-height: 1;
    align-items: center;
  `}
`
