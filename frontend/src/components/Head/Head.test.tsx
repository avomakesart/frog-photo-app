/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { Head } from '..';

describe('components/Head', () => {
  const props = {
    title: 'Cool page',
    description: 'This is a description',
  };

  test('should render the component correctly with all the props', () => {
    const rendered = render(<Head {...props}>SOME COOL CONTENT</Head>);
    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the component correctly with the mandatory props', () => {
    const rendered = render(<Head {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
