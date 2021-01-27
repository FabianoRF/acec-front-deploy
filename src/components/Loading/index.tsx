import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

import colors from '../../utils/colors';

const Loading: React.FC = () => (
  <Container>
    <ReactLoading type="bubbles" color={colors.primary} width="120px" />
  </Container>
);

export default Loading;
