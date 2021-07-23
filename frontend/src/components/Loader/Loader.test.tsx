/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { Loader } from '..';

describe('components/Loader', () => {
  const props = {
    title: 'Loading some cool stuff',
  };
  test('should render the component correctly with its props', () => {
    const rendered = render(<Loader {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
