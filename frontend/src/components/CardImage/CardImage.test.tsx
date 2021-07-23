/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { CardImage } from '..';

describe('components/CardImage', () => {
  const props = {
    image: {
      urls: 'https://images.unsplash.com/photo-1621192488040-c91d793fb659?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      descriptions: 'Hello world',
    },
  };

  test('should render the component correctly with all the props', () => {
    const rendered = render(<CardImage {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
