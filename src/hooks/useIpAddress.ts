import { useEffect, useState } from 'react'

import { ApiAddressService } from '../services/ApiAddressService.ts'
import type { Address, ErrorData, InputAddressParams } from '../types.ts'

export const useIpAddress = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorData | string | null>(null)
  const [data, setData] = useState<Address | null>(null)

  useEffect(() => {
    void (async () => {
      await fetchIpAddress()
    })()
  }, [])

  async function fetchIpAddress(params: InputAddressParams = {}) {
    setLoading(true)

    try {
      const response = await ApiAddressService.fetchAddress(params)

      console.log(response, 'response')

      if (response.status === 'error') {
        setData(null)
        setError(response.data)
        return
      }

      setData(response.data)
      setError(null)
    } catch (error) {
      setData(null)
      setError(error instanceof Error ? error.message : String(error))
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, fetchIpAddress }
}
