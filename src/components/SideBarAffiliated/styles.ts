import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.aside`
  background: #fff;
  min-height: 600px;
  width: 300px;

  border-right: 5px solid ${colors.textDetails};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 16px;
  color: ${colors.textDetails};

  span {
    width: 100%;
    border-bottom: 5px solid ${colors.textDetails};
    display: flex;
    align-items: center;
    font-size: 16px;

    padding: 14px 40px;

    font-weight: 400;
    font-style: normal;
  }

  button {
    font-size: 16px;

    display: flex;
    align-items: center;

    background: transparent;
    text-align: left;
    text-decoration: none;
    color: ${colors.primary};

    padding: 14px 40px;

    width: 100%;
    transition: background 0.3s;

    border-top: 2px solid ${colors.textDetails};

    &:hover {
      background: rgba(196, 196, 196, 0.33);
    }
    svg {
      color: ${colors.primary};
    }
  }

  a {
    font-size: 16px;

    display: flex;
    align-items: center;

    background: transparent;
    text-align: left;
    text-decoration: none;
    color: ${colors.textDetails};

    padding: 14px 40px;

    width: 100%;
    transition: background 0.3s;

    & + a {
      border-top: 2px solid ${colors.textDetails};
    }

    &:hover {
      background: rgba(196, 196, 196, 0.33);
    }
  }

  svg {
    margin-right: 8px;
  }
`;
