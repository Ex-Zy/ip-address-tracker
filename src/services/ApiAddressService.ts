import { Address, ApiResponse, ErrorApiResponse, InputAddressParams, SuccessApiResponse } from '../types.ts'
import { isApiError, transformUrlParamsToFullUrl } from '../utils.ts'

export const ApiAddressService = {
  async fetchAddress(params: InputAddressParams): Promise<ApiResponse> {
    try {
      const response: Response = await fetch(transformUrlParamsToFullUrl(params))
      const address: unknown = await response.json()

      if (isApiError(address)) {
        return {
          status: 'error',
          data: address,
        } as ErrorApiResponse
      }

      return {
        status: 'success',
        data: address as Address,
      } as SuccessApiResponse
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error))
    }
  },
}
