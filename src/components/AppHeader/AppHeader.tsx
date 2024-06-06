import './AppHeader.scss'
import type React from 'react'

import type { Address, ErrorData, HTMLFormElementWithSearch } from '../../types.ts'
import { transformErrorToSingleString } from '../../utils.ts'
import { IpAddress } from '../IpAddress/IpAddress.tsx'
import { SearchForm } from '../SearchForm/SearchForm.tsx'

interface Props {
  loading: boolean
  address: Address | null
  error: ErrorData | string | null
  onSubmit: (e: React.FormEvent<HTMLFormElementWithSearch>) => void
}

export const AppHeader: React.FC<Props> = ({ loading, address, error, onSubmit }: Props) => {
  return (
    <header className="app-header">
      <div className="app-header__in">
        <h1 className="title">IP Address Tracker</h1>
        <SearchForm loading={loading} onSubmit={onSubmit} />
        {address ? (
          <IpAddress address={address} />
        ) : error ? (
          <div className="app-header-error">{transformErrorToSingleString(error)}</div>
        ) : loading ? (
          <div className="app-header-loading">Loading...</div>
        ) : null}
      </div>
    </header>
  )
}
