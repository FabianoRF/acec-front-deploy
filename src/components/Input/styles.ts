import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

import colors from '../../utils/colors';

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isRegisterInput: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & + div {
    margin-top: 10px;
  }

  span {
    min-width: 65px;
    margin: 0 10px;
    font-size: 14px;
    color: ${colors.textDetails};
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      min-width: auto;
      font-size: 14px;
      margin: 0 4px;
    }
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: #fff;
  padding: 16px;
  width: 100%;

  border: 2px solid ${colors.textDetails};
  color: ${colors.textDetails};

  display: flex;
  align-items: center;

  ${props =>
    props.isRegisterInput
      ? css`
          border: 1px solid hsl(0, 0%, 80%);
          background-color: hsl(0, 0%, 100%);
          border-radius: 4px;
          padding: 8px;

          &::placeholder {
            color: #6c6c6c;
          }
        `
      : css`
          margin-top: 10px;
        `}

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${colors.secondary};
      border-color: ${colors.secondary};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: ${colors.secondary};
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #232129;

    &::placeholder {
      color: #6c6c6c;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin-right: 0;
  }

  span {
    background: #c53030;
    color: #fff;
  }
`;
