import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type MapProps = {
  width: string;
  height: string,
}

const Map = ({width, height}:MapProps) => {
  const mapRef = useRef(null);
  useMap(mapRef);

  return (
    <div
      style={{
        height: height,
        width: width,
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'block'
      }}
      ref={mapRef}
    />
  );
};

export default Map;
