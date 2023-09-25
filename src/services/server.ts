const getMultipleWinners = (): Promise<Domain.Years> =>
  fetch(`${import.meta.env.VITE_API}/?projection=years-with-multiple-winners`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch(console.error);

const getTopStudios = (): Promise<Domain.Studios> =>
  fetch(`${import.meta.env.VITE_API}/?projection=studios-with-win-count`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch(console.error);

const getProducersIntervalWin = (): Promise<Domain.Interval> =>
  fetch(`${import.meta.env.VITE_API}/?projection=max-min-win-interval-for-producers`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch(console.error);

const getMovieWinnerYears = (year?: string): Promise<Domain.Movie[]> =>
  fetch(`${import.meta.env.VITE_API}/?winner=true&year=${year}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch(console.error);

const getMoviesData = (page: number, size: number, year?: string, winner?: boolean): Promise<Domain.List> => {
  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("size", size.toString());

  if (year) params.append("year", year.toString());
  if (winner !== undefined) params.append("winner", winner.toString());

  console.log(params.toString());

  return fetch(`${import.meta.env.VITE_API}/?${params.toString()}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch(console.error)
}


export {
  getMultipleWinners,
  getTopStudios,
  getProducersIntervalWin,
  getMovieWinnerYears,
  getMoviesData,
};
