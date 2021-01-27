import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(18, 164, 84, 0.43);

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #12a454;
    font-size: 14px;

    svg {
      color: #12a454;
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }

    h4 {
      margin-top: 10px;
    }
  }
`;
