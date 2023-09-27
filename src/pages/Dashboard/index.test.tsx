import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Dashboard from './index';

describe('Pages :: Dashboard', () => {
  beforeAll(() => {
    vi.mock('../../components/Card', () => ({
      default: ({ children, title }: { title: string } & React.PropsWithChildren) => <div><span>{title}</span>{children}</div>
    }));

    vi.mock('../../components/Table', () => ({
      default: ({ children }: React.PropsWithChildren) => <div>{children}</div>
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
  });
});
