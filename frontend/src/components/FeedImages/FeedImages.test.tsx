/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import React from 'react';
import { FeedImages } from '..';

describe('components/FeedImages', () => {
  const myInitialState = true;

  React.useState = jest.fn().mockReturnValue([myInitialState, {}]);

  const props = {
    images: [
      {
        id: 1,
        urls: 'https://images.unsplash.com/photo-1626551966362-0d3e0f4c1655?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        alt_description: 'cool',
      },
    ],
    imagesLength: 1,
    setShowMore: true,
  };

  test('should render the component correctly with all the props and values', () => {
    const rendered = render(<FeedImages {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
