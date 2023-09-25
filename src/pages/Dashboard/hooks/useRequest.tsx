import { useEffect, useState } from 'react';
import {
  getMultipleWinners,
  getTopStudios,
  getProducersIntervalWin,
} from '../../../services/server';

interface UseRequestResponse {
  topStudios?: Domain.Studio[];
  multipleWinners?: Domain.Year[];
  interval?: Domain.Interval;
}

const useRequest = (): UseRequestResponse => {
  const [topStudios, setTopStudios] = useState<Domain.Studio[]>();
  const [multipleWinners, setMultipleWinners] = useState<Domain.Year[]>();
  const [interval, setInterval] = useState<Domain.Interval>();

  useEffect(() => {
    Promise.all([
      getMultipleWinners(),
      getTopStudios(),
      getProducersIntervalWin(),
    ]).then(([{ years }, { studios }, interval]) => {
      setMultipleWinners(years);
      setTopStudios(studios.sort((a, b) => b.winCount - a.winCount).slice(0, 3));
      setInterval(interval);
    });
  }, []);

  return { topStudios, multipleWinners, interval };
}

export default useRequest;
