import { shade } from 'polished';
import styled from 'styled-components';
import colors from '../../../../utils/colors';

export const Container = styled.div`
  min-height: 320px;
  min-width: 400px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;

    border-bottom: 1px solid #9c9c9c;

    > button {
      background: none;
      border: 0;
      outline: 0;
      padding: 0;

      > svg {
        width: 20px;
        height: 20px;
        margin-left: 12px;

        &:hover {
          color: ${shade(0.3, '#292929')};
        }
      }
    }

    h1 {
      font-size: 18px;
      color: #9c9c9c;
      font-weight: 500;
    }
  }
  form {
    width: 100%;
    height: 180px;
    padding-top: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${colors.primary};
      height: 48px;
      width: 150px;
      color: #fff;
      border: 0;
      font-weight: 500;
      font-size: 18px;
      transition: background-color 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 7px;
        width: 20px;
        height: 20px;
      }

      &:hover {
        background: ${colors.secondary};
      }
    }

    .css-2b097c-container {
      width: 260px;
      z-index: 4;
    }
  }
`;

export const AlteredMessage = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 18px;
    color: ${colors.primary};
    font-weight: 500;
  }
`;
