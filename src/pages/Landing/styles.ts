import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.div`
  header {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0;

    border-top: 2px solid ${colors.primary};

    > div {
      width: 100%;

      max-width: 1280px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        height: 67px;
        width: 81px;
      }

      nav {
        display: flex;

        .btn-carona {
          display: flex;
          align-items: center;
          justify-content: center;

          background: ${colors.primary};
          height: 40px;
          width: 140px;
          color: #fff;
          font-weight: 500;
          font-size: 18px;

          transition: background 0.3s;

          &:hover {
            background: ${colors.secondary};
          }
        }

        .btn-sign-in {
          display: flex;
          align-items: center;
          justify-content: center;

          height: 40px;
          width: 140px;
          color: ${colors.textTitle};
          font-weight: 500;
          font-size: 18px;

          transition: color 0.3s;

          &:hover {
            color: ${colors.secondary};
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    header {
      padding: 25px 30px;
      > div {
        nav {
          .btn-sign-in {
            display: none;
          }
          img {
            display: none;
          }
        }
      }
    }
  }
`;

export const MainSection = styled.section`
  background: rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 540px;

  display: flex;
  justify-content: center;

  > div {
    max-width: 1180px;
    width: 100%;
    margin-top: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    article {
      h1 {
        font-weight: 500;
        font-size: 48px;
        line-height: 72px;
        color: ${colors.textTitle};
        width: 461px;
      }

      p {
        margin-top: 20px;

        font-size: 14px;
        line-height: 21px;
        text-align: justify;

        width: 461px;
      }

      a {
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${colors.primary};
        height: 40px;
        width: 220px;
        color: #fff;
        font-weight: 500;
        font-size: 18px;

        transition: background 0.3s;

        &:hover {
          background: ${colors.secondary};
        }
      }
    }
  }

  @media (max-width: 800px) {
    > div {
      max-width: 500px;
      padding: 0 30px;
      margin-top: 10px;

      article {
        h1 {
          font-weight: 500;
          font-size: 32px;
          line-height: 48px;
          width: 100%;
          text-align: center;
        }
        p {
          width: auto;
          text-align: center;
        }
        a {
          margin: 40px auto 0;
        }
      }

      img {
        display: none;
      }
    }
  }
`;

export const CardSection = styled.section`
  margin-top: 100px;

  > div {
    max-width: 1080px;
    width: 100%;
    display: flex;
    align-items: flex-start;

    margin: 0 auto;

    div {
      margin-left: 60px;
      position: relative;

      h2 {
        font-weight: 500;
        font-size: 26px;
        line-height: 39px;
      }

      p {
        margin-top: 45px;
        width: 550px;
        font-size: 14px;
        line-height: 21px;
      }

      img {
        position: absolute;
        right: -140px;
        top: 0;
      }
    }
  }

  .flex-reverse {
    flex-direction: row-reverse !important;
    justify-content: space-between;
    margin-bottom: 100px;

    > div {
      margin: 0;
    }
  }

  > img {
    width: 350px;
    height: 268px;
  }

  @media (max-width: 800px) {
    > div {
      max-width: 400px;
      flex-direction: column;
      align-items: center;
      padding: 0 30px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      div {
        margin: 0;
        margin-top: 10px;

        p {
          width: auto;
        }

        img {
          height: 230px;
          width: 230px;
          object-fit: cover;
          right: auto;
          left: -10px;
          top: 70px;
        }
      }
    }
    .flex-reverse {
      flex-direction: column !important;
      align-items: center;
      margin-bottom: 100px;

      > div {
        margin: 0;

        p {
          width: auto;
        }

        img {
          height: 213px;
          width: 260px;
        }
      }
    }
  }
`;
