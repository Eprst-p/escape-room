import {useEffect, useState, MutableRefObject, useCallback} from 'react';
import {Map, Marker} from 'leaflet';
import {pin} from '../settings/map-settings';
import leaflet from 'leaflet'
import { Coordinates } from '../settings/map-settings';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
): Map | null {

  const [map, setMap] = useState<Map | null>(null);

  const createMap = useCallback(() => {
    if (mapRef.current !== null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: Coordinates.Latitude,
          lng: Coordinates.Longitude,
        },
        zoom: Coordinates.Zoom,
      });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
    };
  }, [mapRef]);


  const setMarker = useCallback((viewedMap: Map) => {
    const marker = new Marker({
      lat: Coordinates.Latitude,
      lng: Coordinates.Longitude
    });
    marker.setIcon(pin).addTo(viewedMap);
  }, []);

  useEffect(() => {
    if (map === null) {
      createMap();
    }
    if (map) {
      setMarker(map);
    }
  }, [createMap, map, setMarker]);

  return map;
};

export default useMap;
