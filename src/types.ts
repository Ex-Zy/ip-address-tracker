export interface Location {
  country: string
  region: string
  timezone: string
  city?: string
  postalCode?: string
  geonameId?: number
  lat?: number
  lng?: number
}

export interface As {
  asn: number
  name: string
  route: string
  domain: string
  type: string
}

export interface Address {
  ip: string
  isp: string
  location: Location
  as: As
  domains?: string[]
}

export interface ErrorData {
  code: number
  messages: string
}

export interface SuccessApiResponse {
  status: 'success'
  data: Address
}

export interface ErrorApiResponse {
  status: 'error'
  data: ErrorData
}

export type ApiResponse = SuccessApiResponse | ErrorApiResponse

export type InputAddressParams = {
  ipAddress?: string
  domain?: string
}

export interface HTMLFormElementWithSearch extends HTMLFormElement {
  elements: HTMLFormControlsCollection & {
    search: HTMLInputElement
  }
}
