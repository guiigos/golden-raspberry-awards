import { render, screen } from '@testing-library/react';
import Aside from './_aside';

describe('Template :: Aside', () => {
  beforeAll(() => {
    vi.mock('./_menu', () => ({
      default: () => <span>MENU</span>
    }));
  });

  test('should be render component', () => {
    render(<Aside />);

    expect(screen.getByText('MENU')).toBeInTheDocument();
  });
});
