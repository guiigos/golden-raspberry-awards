import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Components :: Table', () => {
  test('should be render loading component', () => {
    render(<Table />)

    expect(screen.getByTestId('test-loading')).toBeInTheDocument()
  })

  test('should be render empty component', () => {
    render(<Table data={[]} />)

    expect(screen.getByTestId('test-empty')).toBeInTheDocument()
  })

  test('should be render component', () => {
    const title = [
      {
        key: 'a',
        value: 'A'
      },
      {
        key: 'b',
        value: 'B'
      }
    ]

    const data = [
      {
        a: 'a',
        b: 'b'
      }
    ]

    render(<Table title={title} data={data} />)

    expect(screen.getByText('a')).toBeInTheDocument()
    expect(screen.getByText('b')).toBeInTheDocument()
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })
})
