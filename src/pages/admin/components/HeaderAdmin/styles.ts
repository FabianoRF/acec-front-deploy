import styled from 'styled-components';

import colors from '../../../../utils/colors';

export const Container = styled.header`
  background: #fff;
  height: 90px;

  display: flex;
  justify-content: center;

  border-top: 10px solid;
  border-bottom: 10px solid;
  border-color: ${colors.primary};

  article {
    max-width: 1280px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        height: 65px;
        width: 75px;
      }

      div {
        display: flex;
        flex-direction: column;
        color: #cecece;
        font-weight: 500;

        margin-left: 140px;

        span {
          color: ${colors.secondary};
        }
      }
    }

    svg {
      height: 40px;
      width: 40px;
      color: ${colors.secondary};
      transition: color 0.3s;
      cursor: pointer;

      &:hover {
        color: ${colors.primary};
      }
    }
  }

  @media (max-width: 980px) {
    border-top: 2px solid ${colors.primary};
    border-bottom: none;

    article {
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
    }
  }
`;
