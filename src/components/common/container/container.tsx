import * as S from './container.styled';
import React from 'react';

type ContainerProps = {
  children: JSX.Element[];
}

const Container = ({ children, ...props }: ContainerProps) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
