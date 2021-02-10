import styled, { css } from 'styled-components';
import colors from '../../utils/colors';

interface SelectContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<SelectContainerProps>`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  font-size: 14px;
  color: ${colors.textDetails};

  p {
    min-width: 65px;
    margin: 0 10px;
  }

  .react-select__control {
    height: 25px;
  }

  .css-2b097c-container {
    width: 160px;
  }

  .css-yk16xz-control {
    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    p {
      min-width: auto;
      font-size: 14px;
      margin: 0 4px;
    }
  }
`;
