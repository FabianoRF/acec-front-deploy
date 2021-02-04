import styled from 'styled-components';

import signInBackground from '../../assets/signin_background.png';

import colors from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;

  background: url(${signInBackground}) no-repeat fixed;
  background-size: cover;

  article {
    > span {
      color: ${colors.primary};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;

  width: 100%;
  max-width: 700px;
  padding: 20px 0;

  img {
    width: 110px;
    height: 90px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    h2 {
      margin: 20px 0;
      color: ${colors.secondary};
    }

    h3 {
      margin-top: 10px;
      color: ${colors.textDetails};
    }

    main {
      width: 100%;
      padding: 20px;
    }

    .profile-section {
      display: grid;
      justify-content: space-between;

      grid-template-columns: 1fr 3fr;
    }

    .documents-section {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
    }

    .adress-section {
      padding: 12px 20px;
      margin: 10px -20px;

      color: ${colors.textDetails};
      border-top: 1px solid ${colors.textDetails};
    }

    .groupx2 {
      display: flex;
      width: 100%;
      margin: 10px 0;

      div,
      p {
        margin: 0;
        margin-left: auto;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${colors.secondary};
    font-size: 12px;
    font-weight: 500;
    transition: color 0.2s;
    margin-top: 16px;

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 800px) {
    form {
      .profile-section {
        display: flex;
        align-items: center;
        flex-direction: column;

        .input-group {
          width: 100%;
        }
      }

      .groupx2 {
        display: block;

        div,
        p {
          margin: 0;
        }
      }
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 20px;

  color: ${colors.textDetails};
  border-bottom: 1px solid ${colors.textDetails};
`;

export const Button = styled.button`
  background: ${colors.primary};
  height: 48px;
  width: 240px;
  color: #fff;
  border: 0;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 16px;
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
`;
