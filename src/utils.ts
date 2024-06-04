import React from 'react'

import { ErrorData, HTMLFormElementWithSearch, InputAddressParams } from './types.ts'

export const isApiError = (err: unknown): err is ErrorData => {
  return typeof err === 'object' && err !== null && 'code' in err && 'messages' in err
}

export const isDomainOrIp = (input: string): 'domain' | 'ip' | 'neither' => {
  const domainRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/
  const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

  if (ipRegex.test(input)) {
    return 'ip'
  } else if (domainRegex.test(input)) {
    return 'domain'
  } else {
    return 'neither'
  }
}

export const transformUrlParamsToFullUrl = (params: InputAddressParams) => {
  const { VITE_BASE_URL, VITE_ENDPOINT, VITE_API_KEY } = import.meta.env
  const queryStr = new URLSearchParams(params).toString()

  let fullUrl = `${VITE_BASE_URL}${VITE_ENDPOINT}?apiKey=${VITE_API_KEY}`

  if (queryStr.length) {
    fullUrl += `&${queryStr}`
  }

  return fullUrl + 'dsadas'
}

export const transformErrorToSingleString = (error: ErrorData | string | null): string => {
  if (error === null) return 'Something went wrong'
  if (typeof error === 'string') return error
  return error.messages
}

export const normalizeFormToUrlParams = (event: React.FormEvent<HTMLFormElementWithSearch>): InputAddressParams => {
  const input = event.currentTarget.elements.search.value
  const type = isDomainOrIp(input)

  if (type === 'ip') {
    return { ipAddress: input }
  }

  if (type === 'domain') {
    return { domain: input }
  }

  return {}
}
