import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 220px;
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

  main {
    margin-top: 12px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 4px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        padding: 6px;
        background: #12a454;
        color: #fff;
        transition: background 0.2s;

        svg {
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
      }

      .btn-show:hover {
        background-color: ${shade(0.2, '#12a454')};
      }

      .btn-unavailable {
        background: #ff0f00;
      }
    }
  }
`;
