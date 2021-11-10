import { render } from '@testing-library/react';
import { SearchBox } from '.';

describe('SearchBox', () => {
  it('renders correctly', () => {
    const { getByDisplayValue, debug } = render(
      <SearchBox value="Squirtle" onChange={() => {}} />
    );
    expect(getByDisplayValue('Squirtle')).toBeInTheDocument();
    debug();
  });
});
