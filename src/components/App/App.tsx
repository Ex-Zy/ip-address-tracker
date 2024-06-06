import './App.scss'
import type React from 'react'

import { useIpAddress } from '../../hooks/useIpAddress.ts'
import type { HTMLFormElementWithSearch } from '../../types.ts'
import { normalizeFormToUrlParams } from '../../utils.ts'
import { AppGeolocationMap } from '../AppGeolocationMap/AppGeolocationMap.tsx'
import { AppHeader } from '../AppHeader/AppHeader.tsx'

function App() {
  const { data, error, loading, fetchIpAddress } = useIpAddress()

  const handleSearchIP = (event: React.FormEvent<HTMLFormElementWithSearch>) => {
    event.preventDefault()

    void fetchIpAddress(normalizeFormToUrlParams(event))
  }

  return (
    <>
      <AppHeader loading={loading} address={data} error={error} onSubmit={handleSearchIP} />
      <AppGeolocationMap loading={loading} address={data} error={error} />
    </>
  )
}

export default App
