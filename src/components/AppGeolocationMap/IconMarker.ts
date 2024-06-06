import L from 'leaflet'

import Icon from '../../assets/icon-location.svg'

const IconMarker = new L.Icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  popupAnchor: [0, -24],
  iconSize: [46, 56],
})

export { IconMarker }
