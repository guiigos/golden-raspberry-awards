import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Table from '../../components/Table'
import Pagination from '../../components/Paginations'
import { getMoviesData } from '../../services/server'

import titleMovies from './schemas/title-movies.json'

const List: React.FC = (): React.ReactElement => {
  const [data, setData] = useState<Domain.List>()
  const [page, setPage] = useState(0)
  const [year, setYear] = useState<string | undefined>()
  const [winner, setWinner] = useState<boolean | undefined>()

  useEffect(() => {
    getMoviesData(page, 15, year, winner).then(setData)
  }, [page, year, winner])

  const handleYear = (event: React.KeyboardEvent) => {
    const value = (event.target as HTMLInputElement).value
    if (event.key === 'Enter') {
      setPage(0)
      setYear(value)
    }
  }

  const handleWinner = (event: React.ChangeEvent) => {
    const value = Number((event.target as HTMLInputElement).value)
    setPage(0)
    if (Number.isNaN(value)) {
      setWinner(undefined)
    } else {
      setWinner(Boolean(value))
    }
  }

  return (
    <Card title="List movies">
      <Table
        title={titleMovies}
        data={data?.content}
        filters={[
          {
            key: 'year',
            element: (
              <input placeholder="Filter by year" onKeyDown={handleYear} />
            )
          },
          {
            key: 'winner',
            element: (
              <select onChange={handleWinner}>
                <option>All</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            )
          }
        ]}
      />

      <Pagination
        total={data?.totalPages}
        current={data?.number}
        onPage={setPage}
      />
    </Card>
  )
}

export default List
