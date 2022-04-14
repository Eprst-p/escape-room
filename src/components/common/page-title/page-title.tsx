import * as S from './page-title.styled';

type PageTitleProps = {
  children: string;
}


const PageTitle = ({ children, ...props } :PageTitleProps) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
