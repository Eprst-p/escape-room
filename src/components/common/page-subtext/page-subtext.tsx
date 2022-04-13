import * as S from './page-subtext.styled';
import React from 'react';


const PageSubtext = ({ children, ...props }) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
