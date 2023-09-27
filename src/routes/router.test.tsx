import React from 'react'
import { render, screen } from '@testing-library/react'
import Router from './router'

describe('Router', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async () => {
      const actual: any = await vi.importActual('react-router-dom')

      return {
        ...actual,
        BrowserRouter: ({ children }: React.PropsWithChildren) => (
          <div>{children}</div>
        ),
        Routes: ({ children }: React.PropsWithChildren) => (
          <div>{children}</div>
        ),
        Route: ({
          children,
          path
        }: { path: string } & React.PropsWithChildren) => (
          <div>
            <span>{path}</span>
            {children}
          </div>
        )
      }
    })
  })

  test('should be render component', () => {
    render(<Router />)

    expect(screen.getByText('/dashboard')).toBeInTheDocument()
    expect(screen.getByText('/list')).toBeInTheDocument()
  })
})
