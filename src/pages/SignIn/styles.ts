import styled from 'styled-components';

import signInBackground from '../../assets/signin_background.png';

import colors from '../../utils/colors';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;

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
  max-width: 500px;

  img {
    width: 200px;
    height: 157px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    h2 {
      margin: 20px 0;
      color: ${colors.secondary};
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
`;

export const Button = styled.button`
  background: ${colors.primary};
  padding: 0 16px;
  height: 48px;
  width: 100%;
  color: #fff;
  border: 0;
  font-weight: 600;
  font-size: 18px;
  margin-top: 16px;
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
