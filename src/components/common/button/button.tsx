import React from 'react';
import * as S from './button.styled';

type ButtonProps = {
  children: JSX.Element;
}

const Button = ({ children, ...props }:ButtonProps) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
