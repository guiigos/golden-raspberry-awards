import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Dashboard from './index';

describe('Pages :: Dashboard', () => {
  beforeAll(() => {
    vi.mock('../../components/Card', () => ({
      default: ({ children, title }: { title: string } & React.PropsWithChildren) => <div><span>{title}</span>{children}</div>
    }));

    vi.mock('../../components/Table', () => ({
      default: ({ title }: { title: [{ key: string, value: string }]}) => <div>{title.map(({ value, key }, index) => (<span key={`${key}-${index}`}>{value}</span>))}</div>
    }));

    vi.mock('../../services/server', () => ({
      getProducersIntervalWin: () => Promise.resolve([]),
      getMovieWinnerYears: () => Promise.resolve([]),
      getMultipleWinners: () => Promise.resolve({ years: [] }),
      getTopStudios: () => Promise.resolve({ studios: [] }),
    }));
  });

  test('should be render component', async () => {
    await act(async () => {
      await render(<Dashboard />);
    });

    expect(screen.getByText('List years with multiple winners')).toBeInTheDocument();
    expect(screen.getByText('Top 3 studios with winners')).toBeInTheDocument();
    expect(screen.getByText('Producers with longest and shortest interval between wins')).toBeInTheDocument();
    expect(screen.getByText('List movie winners by year')).toBeInTheDocument();

    expect(screen.getAllByText('Year')).toHaveLength(2);
    expect(screen.getAllByText('Win Count')).toHaveLength(2);
    expect(screen.getAllByText('Name')).toHaveLength(1);
    expect(screen.getAllByText('Producer')).toHaveLength(2);
    expect(screen.getAllByText('Interval')).toHaveLength(2);
    expect(screen.getAllByText('Previous Year')).toHaveLength(2);
    expect(screen.getAllByText('Following Year')).toHaveLength(2);
    expect(screen.getAllByText('Id')).toHaveLength(1);
    expect(screen.getAllByText('Title')).toHaveLength(1);
  });
});
