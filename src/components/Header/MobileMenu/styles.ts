import styled from 'styled-components';
import colors from '../../../utils/colors';

export const Container = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  top: 0px;
  height: 100%;
  margin-top: auto;

  background: #ffede2;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 20px 30px;
    border-top: 1px solid ${colors.primary};
    border-bottom: 1px solid ${colors.primary};

    div {
      width: 31px;
      height: 31px;
    }

    img {
      width: 86px;
      height: 70px;
    }

    svg {
      color: ${colors.secondary};
      width: 31px;
      height: 31px;

      cursor: pointer;

      &:hover {
        color: ${colors.primary};
      }
    }
  }

  > div {
    padding: 30px;

    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      font-size: 16px;

      padding: 14px;

      font-weight: 400;
      font-style: normal;
    }

    button {
      font-size: 16px;

      display: flex;
      align-items: center;

      background: transparent;
      text-align: left;
      text-decoration: none;
      color: ${colors.primary};

      padding: 14px;

      transition: background 0.3s;

      &:hover {
        background: rgba(196, 196, 196, 0.33);
      }
      svg {
        color: ${colors.primary};
      }
    }

    .btn-att {
      color: ${colors.textDetails};

      svg {
        color: ${colors.textDetails};
      }
    }

    a {
      font-size: 16px;

      display: flex;
      align-items: center;

      background: transparent;
      text-align: left;
      text-decoration: none;
      color: ${colors.textDetails};

      padding: 14px 40px;

      transition: background 0.3s;

      &:hover {
        background: rgba(196, 196, 196, 0.33);
      }
    }

    svg {
      margin-right: 8px;
    }
  }
`;
