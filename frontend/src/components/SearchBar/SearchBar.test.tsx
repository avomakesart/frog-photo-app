/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { SearchBar } from '..';

describe('components/SearchBar', () => {
  const props = {
    onSubmit: () => console.log('Submitting data'),
  };
  test('should render the component correctly with its props', () => {
    const rendered = render(<SearchBar {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
