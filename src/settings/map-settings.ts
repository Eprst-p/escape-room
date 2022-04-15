import { CoordinatesType } from "../types/coordinates-type";
import {Icon} from 'leaflet';

export const Coordinates: CoordinatesType = {
  Latitude: 59.968137,
  Longitude: 30.316272,
  Zoom: 10,
} as const;

export const Pin = new Icon({
  iconUrl: 'assets/img/pin.svg',
  iconSize: [25, 35],
  iconAnchor: [20, 35]
});

export enum MapProportion {
  Width = '649',
  Height = '336'
}
