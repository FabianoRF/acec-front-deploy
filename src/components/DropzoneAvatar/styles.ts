import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  width: 160px;
  height: 180px;
  background: rgba(255, 116, 38, 0.49);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  cursor: pointer;

  img {
    width: 160px !important;
    height: 180px !important;
    object-fit: cover;
    border: 1px solid ${colors.primary};
  }

  p {
    font-size: 14px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.secondary};

    svg {
      color: ${colors.secondary};
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 700px) {
    margin-right: 10px;
  }
`;
