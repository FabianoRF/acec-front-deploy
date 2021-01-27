import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.footer`
  background-color: ${colors.secondary};
  width: 100%;

  display: flex;
  justify-content: center;

  > div {
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

    .texting {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      p {
        color: #fff;
        font-size: 16px;
        text-align: left;
        font-weight: 400;

        & + p {
          padding-top: 10px;
        }
      }
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 2rem;

    svg {
      color: #fff;
      height: 40px;
      width: 40px;
    }
  }
`;
