import './IpAddress.scss'
import React from 'react'

import { Address } from '../../types.ts'

interface Props {
  address: Address
}

export const IpAddress: React.FC<Props> = ({ address }: Props) => {
  const { location: { city = '', region = '', country = '', timezone = '' } = {} } = address
  const locationValue = [city, region, country].filter(Boolean).join(', ')
  return (
    <ul className="ip-address">
      <li className="ip-address__item">
        <div className="ip-address__label">IP Address</div>
        <div className="ip-address__value">{address.ip}</div>
      </li>
      <li className="ip-address__item">
        <div className="ip-address__label">Location</div>
        <div className="ip-address__value">{locationValue}</div>
      </li>
      <li className="ip-address__item">
        <div className="ip-address__label">Timezone</div>
        <div className="ip-address__value">UTC{timezone}</div>
      </li>
      <li className="ip-address__item">
        <div className="ip-address__label">ISP</div>
        <div className="ip-address__value">{address.isp || 'unknown'}</div>
      </li>
    </ul>
  )
}
