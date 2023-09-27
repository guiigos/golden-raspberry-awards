declare namespace Domain {
  interface Year {
    year: number
    winnerCount: number
  }

  interface Years {
    years: Year[]
  }

  interface Studio {
    name: string
    winCount: number
  }

  interface Studios {
    studios: Studio[]
  }

  interface MinMax {
    producer: string
    interval: number
    previousWin: number
    followingWin: number
  }

  interface Interval {
    min: MinMax[]
    max: MinMax[]
  }

  interface Movie {
    id: number
    year: number
    title: string
    winner: boolean
  }

  interface List {
    content: Movie[]
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    size: number
    totalElements: number
    totalPages: number
  }
}
