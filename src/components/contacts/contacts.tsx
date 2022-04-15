import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';
import { ContactData } from '../../settings/contact-data';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import Map from './map';
import { MapProportion } from '../../settings/map-settings';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Contacts = () => {
  // const mapRef = useRef(null);
  // useMap(mapRef);

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
              {/* <S.ContactsMap style={{height: MapProportion.Width, width: MapProportion.Height,  backgroundColor: 'yellow'}} /> */}

              <MapContainer center={[51.505, -0.09]} zoom={13}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>


               {/* <div style={{height: MapProportion.Width, width: MapProportion.Height, position: 'absolute', top: 0, left: 0, display: 'block', backgroundColor: 'yellow'}}> asasdasdasasdasd</div> */}

                {/* <S.ContactsMapImage
                  src={contactsMap}
                  alt={`мы находимся по адресу ${ContactData.AdressCity}, ${ContactData.AdressStreet}`}
                  width={MapProportion.Width}
                  height={MapProportion.Height}
                /> */}
                {/* <Map width={MapProportion.Width} height={MapProportion.Height} /> */}

            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  )


};

export default Contacts;
