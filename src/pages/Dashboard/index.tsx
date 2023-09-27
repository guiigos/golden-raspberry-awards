import React, { useState, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { getMovieWinnerYears } from '../../services/server'
import useRequest from './hooks/useRequest'
import Table from '../../components/Table'
import Card from '../../components/Card'

import titleProducersIntervalWins from './schemas/title-producers-interval-wins.json'
import titleMultipleWinners from './schemas/title-multiple-winners.json'
import titleMovieWinners from './schemas/title-movie-winners.json'
import titleTopStudios from './schemas/title-top-studios.json'

const Dashboard: React.FC = () => {
  const { multipleWinners, topStudios, interval } = useRequest()
  const [movieWinners, setMovieWinners] = useState<Domain.Movie[]>([])

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null)

  const handleSearch = () =>
    !!inputRef?.current?.value &&
    getMovieWinnerYears(inputRef?.current?.value).then(setMovieWinners)

  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <Card title="List years with multiple winners">
        <Table title={titleMultipleWinners} data={multipleWinners} />
      </Card>

      <Card title="Top 3 studios with winners">
        <Table title={titleTopStudios} data={topStudios} />
      </Card>

      <Card title="Producers with longest and shortest interval between wins">
        <h2 className="pt-3">Maximum</h2>
        <Table title={titleProducersIntervalWins} data={interval?.max} />

        <h2 className="pt-3">Minimum</h2>
        <Table title={titleProducersIntervalWins} data={interval?.min} />
      </Card>

      <Card title="List movie winners by year">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="number"
            placeholder="Search by year"
            className="my-2 w-full rounded border border-gray-300"
          />

          <button
            className="m-2 rounded-sm bg-blue-600 p-1 text-white"
            onClick={handleSearch}
          >
            <BsSearch />
          </button>
        </div>

        <Table title={titleMovieWinners} data={movieWinners} />
      </Card>
    </section>
  )
}

export default Dashboard
