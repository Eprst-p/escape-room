import { CoordinatesType } from "../types/coordinates-type";
import {Icon} from 'leaflet';

export const Coordinates: CoordinatesType = {
  Latitude: 59.968137,
  Longitude: 30.316272,
  Zoom: 17,
} as const;

export const Pin = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [25, 35],
  iconAnchor: [20, 35]
});

export enum MapProportion {
  Width = '649px',
  Height = '336px'
}
