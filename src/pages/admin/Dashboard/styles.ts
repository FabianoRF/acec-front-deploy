import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-right: 50px;

  > div {
    max-width: 1380px;
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 980px) {
    width: 100%;
    margin: 0;
  }
`;

export const Content = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  padding: 0 20px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 16px 0 16px;

    div {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100%;

      background: rgba(255, 116, 38, 0.4);

      padding: 16px;

      input {
        margin-left: 30px;
        color: #fff;
        width: 100%;
        font-size: 16px;

        border: 0;
        background: transparent;

        &::placeholder {
          color: #fff;
        }
      }
    }

    button {
      background: #12a454;

      border: 0;
      padding: 16px 20px;
      margin-left: 20px;
      color: #fff;
      font-size: 22px;
      transition: background 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#12a454')};
      }
    }
  }
`;

export const Table = styled.section`
  display: flex;
  flex-direction: column;

  header {
    display: grid;
    grid-template-columns: 2fr 1fr 1.2fr 1fr;

    width: 100%;

    span {
      font-size: 22px;
      color: #9c9c9c;
      font-weight: 500;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    section {
      display: grid;
      grid-template-columns: 2fr 1fr 1.2fr 1fr;
      width: 100%;
      align-items: center;
      font-size: 14px;

      padding: 6px 0;

      border-top: 1px solid #9c9c9c;

      .btn-show-payments {
        background: #fff;
        width: 100px;
        padding: 6px;
        color: #12a454;
        border: 2px solid #12a454;
        transition: background-color 0.2s;
        font-size: 14px;

        &:hover {
          background-color: ${shade(0.1, '#fff')};
        }
      }

      .btn-show-contract {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        padding: 6px;
        background: #12a454;
        font-size: 14px;
        color: #fff;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.2, '#12a454')};
        }

        svg {
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: 980px) {
    width: 100%;
    margin: 0;

    header {
      grid-template-columns: 1fr 1fr 1fr;

      span {
        text-align: center;
        padding: 13px 15px;
      }
    }

    main {
      section {
        grid-template-columns: 1fr 1fr 1fr;

        span {
          padding: 13px 15px;
          text-align: center;
        }
        button,
        a {
          margin: 13px auto;
        }
      }
    }

    .travel-field,
    .travel-title {
      display: none;
    }
  }
`;

export const UserInformation = styled.article`
  display: flex;
  align-items: center;
  font-size: 14px;

  img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }

  a {
    display: flex;
    align-items: center;

    svg {
      color: #12a454;
      height: 20px;
      width: 20px;
      transition: color 0.2s;
      margin-left: 10px;

      &:hover {
        color: ${shade(0.5, '#12a454')};
      }
    }
  }

  @media (max-width: 980px) {
    img {
      display: none;
    }
  }
`;
