/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { ImageList } from '..';

describe('components/ImageList', () => {
  const props = {
    imageArr: [
      {
        id: 1,
        urls: 'https://images.unsplash.com/photo-1626551966362-0d3e0f4c1655?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        alt_description: 'cool',
      },
    ],
  };
  test('should render the component correctly with its props', () => {
    const rendered = render(<ImageList {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
