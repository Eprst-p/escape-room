import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './contacts.styled';
import { ContactData } from '../../settings/contact-data';
import Map from './map';


const Contacts = () => {

  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>

          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>Адрес</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                  {`${ContactData.AdressCity},`}
                  <br />
                  {`${ContactData.AdressStreet}`}
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>Режим работы</S.ContactTitle>
              <S.ContactValue>{`${ContactData.WorkingMode}`}</S.ContactValue>

              <S.ContactTitle>Телефон</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={`tel:${ContactData.Phone}`}>
                  {`${ContactData.Phone}`}
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>E-mail</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={`mailto:${ContactData.Email}`}>
                {`${ContactData.Email}`}
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap >
              <Map />
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  )


};

export default Contacts;
