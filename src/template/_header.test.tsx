import { render, screen } from '@testing-library/react'
import Header from './_header'

describe('Template :: Header', () => {
  beforeAll(() => {
    vi.mock('./_menu', () => ({
      default: () => <span>MENU</span>
    }))
  })

  test('should be render component', () => {
    render(<Header />)

    expect(screen.getByText('FontEnd React Test')).toBeInTheDocument()
    expect(screen.getByText('MENU')).toBeInTheDocument()
  })
})
