import './SearchForm.scss'
import React from 'react'
import { ClipLoader } from 'react-spinners'

import { HTMLFormElementWithSearch } from '../../types.ts'

interface Props {
  loading: boolean
  onSubmit: (e: React.FormEvent<HTMLFormElementWithSearch>) => void
}

export const SearchForm: React.FC<Props> = ({ loading, onSubmit }) => {
  return (
    <form className="search search--margin" onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        className="search__input"
        placeholder="Search for any IP address or domain"
        disabled={loading}
      />
      <ClipLoader color="#5a76dd" className="search__loader" loading={loading} />
      <button type="submit" className="search__btn">
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L8 8L2 14" stroke="white" strokeWidth="3" />
        </svg>
      </button>
    </form>
  )
}
