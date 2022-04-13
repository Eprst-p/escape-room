import * as S from './page-title.styled';
import React from 'react';


const PageTitle = ({ children, ...props }) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
