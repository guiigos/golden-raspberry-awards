import { render, screen } from '@testing-library/react';
import Template from './index';

describe('Template', () => {
  beforeAll(() => {
    vi.mock('./_header', () => ({
      default: () => <span>HEADER</span>
    }));
    vi.mock('./_aside', () => ({
      default: () => <span>ASIDE</span>
    }));
    vi.mock('./_main', () => ({
      default: () => <span>MAIN</span>
    }));
  });

  test('should be render component', async () => {
    render(<Template />);

    expect(screen.getByText('HEADER')).toBeInTheDocument();
    expect(screen.getByText('ASIDE')).toBeInTheDocument();
    expect(screen.getByText('MAIN')).toBeInTheDocument();
  });
});
