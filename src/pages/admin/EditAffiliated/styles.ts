import { shade } from 'polished';
import styled from 'styled-components';

import colors from '../../../utils/colors';

export const Container = styled.main`
  max-width: 1380px;
  margin: 0 auto;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    width: 100%;

    flex-direction: column;

    max-width: 700px;

    h1 {
      text-align: center;
      font-size: 20px;
      color: ${colors.textDetails};
      font-weight: 500;
      padding: 10px 0;
      margin-bottom: 10px;
      border-bottom: 2px solid ${colors.textSubTitle};
    }

    > article {
      margin: 0 auto;
      margin-bottom: 10px;

      img {
        object-fit: cover;
        border-radius: 50%;
        height: 200px;
        width: 200px;
      }
    }

    .group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      div,
      p {
        margin: 0;
        margin-left: auto;
      }
    }

    .group3x1 {
      display: grid;
      grid-template-columns: 3fr 1fr;
      margin-bottom: 10px;

      div,
      p {
        margin: 0;
      }
    }

    button,
    a {
      background: ${colors.primary};
      padding: 0 16px;
      height: 48px;
      width: 150px;
      color: #fff;
      border: 0;
      font-weight: 500;
      transition: background-color 0.2s;
      font-size: 18px;

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

    .box-contract {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 10px 0;

      h2 {
        width: 100%;
        border-bottom: 2px solid ${colors.textSubTitle};
        text-align: center;
        font-size: 22px;
        color: ${colors.textDetails};
        font-weight: 500;
        padding: 10px 0;
      }

      .btn-contract {
        margin-top: 10px;
        color: #fff;
        background: ${colors.green};
        transition: 0.2s;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    .box-btn {
      padding: 12px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .btn-delete {
        background: ${colors.red};
        color: #fff;

        &:hover {
          background: ${shade(0.2, `${colors.red}`)};
        }
      }
    }

    @media (max-width: 980px) {
      padding: 30px;

      .group3x1,
      .group {
        display: block;
      }
    }
  }
`;
