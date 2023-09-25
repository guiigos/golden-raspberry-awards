import { render, screen, act, fireEvent } from '@testing-library/react';
import Paginations from './Paginations';

describe('Components :: Paginations', () => {
  test('should be render component', () => {
    render(<Paginations onPage={vi.fn()} current={0} total={10} />);

    new Array(10).forEach(element => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });
  });

  test('should be select page', () => {
    const fn = vi.fn()
    render(<Paginations onPage={fn} current={0} total={10} />);

    const page = screen.getByText('3');
    fireEvent.click(page);

    expect(fn).toBeCalledWith(2);
  });

  test('should be select first', () => {
    const fn = vi.fn()
    render(<Paginations onPage={fn} current={10} total={20} />);

    const page = screen.getAllByRole('button')
    fireEvent.click(page[0]);

    expect(fn).toBeCalledWith(0);
  });

  test('should be select ended', () => {
    const fn = vi.fn()
    render(<Paginations onPage={fn} current={10} total={20} />);

    const page = screen.getAllByRole('button')
    fireEvent.click(page[page.length - 1]);

    expect(fn).toBeCalledWith(19);
  });

  test('should be select previous', () => {
    const fn = vi.fn()
    render(<Paginations onPage={fn} current={10} total={20} />);

    const page = screen.getAllByRole('button')
    fireEvent.click(page[1]);

    expect(fn).toBeCalledWith(9);
  });

  test('should be select next', () => {
    const fn = vi.fn()
    render(<Paginations onPage={fn} current={10} total={20} />);

    const page = screen.getAllByRole('button')
    fireEvent.click(page[page.length - 2]);

    expect(fn).toBeCalledWith(11);
  });
});
