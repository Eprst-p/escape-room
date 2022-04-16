import logo from 'assets/img/logo.svg';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../../settings/app-route';
import { ContactData } from '../../../settings/contact-data';
import * as S from './header.styled';


const Header = () => {
  const location = useLocation().pathname;

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link $isActiveLink={location===AppRoute.Catalog} to={AppRoute.Catalog}>Квесты</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link $isActiveLink={false} to="#" title='в разработке'>Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link $isActiveLink={false} to="#" title='в разработке'>Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link $isActiveLink={false} to="#" title='в разработке'>Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link $isActiveLink={location===AppRoute.Contacts} to={AppRoute.Contacts}>Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href={`tel:${ContactData.Phone}`}>{`${ContactData.Phone}`}</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default memo(Header);
