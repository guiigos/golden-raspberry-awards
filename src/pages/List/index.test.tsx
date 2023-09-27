import React from 'react'
import { render, screen, act } from '@testing-library/react'
import List from './index'

describe('Pages :: List', () => {
  beforeAll(() => {
    vi.mock('../../components/Card', () => ({
      default: ({
        children,
        title
      }: { title: string } & React.PropsWithChildren) => (
        <div>
          <span>{title}</span>
          {children}
        </div>
      )
    }))

    vi.mock('../../components/Table', () => ({
      default: ({ children }: React.PropsWithChildren) => <div>{children}</div>
    }))

    vi.mock('../../components/Pagination', () => ({
      default: ({ children }: React.PropsWithChildren) => <div>{children}</div>
    }))

    vi.mock('../../services/server', () => ({
      getMoviesData: () => Promise.resolve([])
    }))
  })

  test('should be render component', async () => {
    await act(async () => {
      await render(<List />)
    })

    expect(screen.getByText('List movies')).toBeInTheDocument()
  })
})
