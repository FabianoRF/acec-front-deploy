import styled from 'styled-components';

import colors from '../../../../utils/colors';

export const Container = styled.aside`
  background: #fff;
  min-height: 600px;
  width: 400px;

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

    padding: 14px 40px;

    font-weight: 400;
    font-style: normal;
  }

  a,
  button {
    font-size: 16px;
    display: flex;
    align-items: center;

    background: transparent;
    text-align: left;
    text-decoration: none;
    color: ${colors.textDetails};

    padding: 14px 0;
    padding-left: 40px;

    width: 100%;
    transition: background 0.3s;

    & + a {
      border-top: 2px solid ${colors.textDetails};
    }
    & + button {
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
