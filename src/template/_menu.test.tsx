import { render, screen } from '@testing-library/react'
import Menu from './_menu'

describe('Template :: Menu', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async () => {
      const actual: any = await vi.importActual('react-router-dom')

      return {
        ...actual,
        Link: () => <span>LINK</span>,
        useLocation: vi.fn
      }
    })
  })

  test('should be render component', async () => {
    render(<Menu />)

    expect(screen.getAllByText('LINK')).toHaveLength(2)
  })
})
