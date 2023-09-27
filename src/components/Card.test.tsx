import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Components :: Card', () => {
  test('should be render component', () => {
    render(
      <Card title="title">
        <span>CONTENT</span>
      </Card>
    )

    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('CONTENT')).toBeInTheDocument()
  })
})
