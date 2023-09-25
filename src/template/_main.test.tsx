import { render, screen } from '@testing-library/react';
import Main from './_main';

describe('Template :: Main', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async () => {
      const actual: any = await vi.importActual('react-router-dom');

      return ({
        ...actual,
        Outlet: () => <span>OUTLET</span>,
      });
    });
  });

  test('should be render component', () => {
    render(<Main />);

    expect(screen.getByText('OUTLET')).toBeInTheDocument();
  });
});
