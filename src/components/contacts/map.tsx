import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import { ContactData } from '../../settings/contact-data';
import { MapProportion } from '../../settings/map-settings';
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';


const Map = () => {
  const mapRef = useRef(null);
  useMap(mapRef);

  return (
    <>
    {
      mapRef === null
      ?
      <S.ContactsMapImage
        src={contactsMap}
        alt={`мы находимся по адресу ${ContactData.AdressCity}, ${ContactData.AdressStreet}`}
        width={MapProportion.Width}
        height={MapProportion.Height}
      />
      :
      <div
        style={{
          height: MapProportion.Height,
          width: MapProportion.Width,
          position: 'absolute',
          display: 'block'
        }}
        ref={mapRef}
      />
    }
    </>
  );
};

export default Map;
