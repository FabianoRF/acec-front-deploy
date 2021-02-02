import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.footer`
  background-color: ${colors.secondary};
  width: 100%;

  display: flex;
  justify-content: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;

    a {
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: color 0.3s;
      font-size: 14px;

      svg {
        height: 24px;
        width: 24px;
        margin-right: 8px;
      }
      span {
        margin-left: 3px;
        font-weight: 500;
      }

      &:hover {
        color: #aea0a0;
      }
    }
  }
`;
