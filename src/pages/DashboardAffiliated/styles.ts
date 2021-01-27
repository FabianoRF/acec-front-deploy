import { shade } from 'polished';
import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
`;

export const Content = styled.section`
  flex: 1;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Table = styled.section`
  display: flex;
  flex-direction: column;

  border: 1px solid ${colors.textDetails};

  header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    border-bottom: 5px solid ${colors.textDetails};

    span {
      padding: 13px 40px;
      font-size: 18px;
      color: ${colors.textSubTitle};
      font-weight: 500;
    }
  }

  main {
    display: flex;
    flex-direction: column;

    section {
      display: grid;
      width: 100%;
      align-items: center;
      font-size: 14px;
      border-bottom: 1px solid ${colors.textDetails};

      grid-template-columns: 1fr 1fr 1fr 1fr;

      span {
        padding: 13px 40px;
        color: ${colors.textDetails};
        font-weight: 500;
      }

      > div {
        margin-top: 5px;
        display: flex;
        align-items: center;

        svg {
          color: #12a454;
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
      }

      button,
      a {
        margin: 13px 40px;

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
