import { render } from '@testing-library/react';
import { Loading } from '.';

describe('Loading component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Loading />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
