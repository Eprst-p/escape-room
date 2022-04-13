import * as S from './page-heading.styled';
import React from 'react';


const PageHeading = ({ children, ...props }) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
