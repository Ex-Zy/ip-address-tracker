import './App.scss'
import React from 'react'

import { useIpAddress } from '../../hooks/useIpAddress.ts'
import { HTMLFormElementWithSearch } from '../../types.ts'
import { normalizeFormToUrlParams } from '../../utils.ts'
import { AppHeader } from '../AppHeader/AppHeader.tsx'

// const ERROR = {
//   code: 422,
//   messages: 'Input correct IPv4 or IPv6 address.',
// }
//
// const DATA = {
//   ip: '176.98.23.132',
//   location: {
//     country: 'UA',
//     region: 'Vinnytsya Oblast',
//     city: 'Kalynivka',
//     lat: 49.46129,
//     lng: 28.51541,
//     postalCode: '',
//     timezone: '+03:00',
//     geonameId: 707155,
//   },
//   as: {
//     asn: 49889,
//     name: 'CRYSTAL-AS',
//     route: '176.98.23.0/24',
//     domain: 'utelecom.com.ua',
//     type: '',
//   },
//   isp: '',
// }

function App() {
  const { data, error, loading, fetchIpAddress } = useIpAddress()

  const handleSubmit = (event: React.FormEvent<HTMLFormElementWithSearch>) => {
    event.preventDefault()

    void fetchIpAddress(normalizeFormToUrlParams(event))
  }

  return (
    <>
      <AppHeader loading={loading} address={data} error={error} onSubmit={handleSubmit} />
    </>
  )
}

export default App
