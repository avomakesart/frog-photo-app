/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { ModalImage } from '..';

describe('components/ModalImage', () => {
  const props = {
    setSelectedImage: () => console.log('setting image'),
    selectedImage: 'https://unsplash.com/photos/jo927cqhtXc',
    imgAlt: 'cool cat dancing in the dark',
  };
  test('should render the component correctly with its props', () => {
    const rendered = render(<ModalImage {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
