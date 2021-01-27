import { shade } from 'polished';
import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.div`
  min-height: 120px;
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
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
      font-size: 16px;
      color: #9c9c9c;
      font-weight: 500;
    }
  }

  .error {
    color: ${colors.red};
    padding: 10px 0;
    font-size: 14px;
  }

  .accepted {
    color: ${colors.green};
    padding: 10px 0;
    font-size: 14px;
  }

  > button {
    margin-top: auto;
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

  > a {
    margin: 20px auto;
    background: ${colors.green};
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
      opacity: 0.7;
    }
  }
`;
