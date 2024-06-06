import './AppGeolocationMap.scss'
import 'leaflet/dist/leaflet.css'

import type React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { ScaleLoader } from 'react-spinners'

import { IconMarker } from './IconMarker.ts'
import type { Address, ErrorData } from '../../types.ts'

interface Props {
  address: Address | null
  loading: boolean
  error: ErrorData | string | null
}

export const AppGeolocationMap: React.FC<Props> = ({ address, loading, error }: Props) => {
  const { location: { lat = 0, lng = 0 } = {} } = address ?? {}
  const position = {
    lat,
    lng,
  }

  if (loading || error) {
    return (
      <div className="app-geolocation-map-loading">
        <ScaleLoader color="#5a76dd" />
      </div>
    )
  }

  return (
    <MapContainer
      className="app-geolocation-map"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={IconMarker}></Marker>
    </MapContainer>
  )
}
