import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtomProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtomProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
