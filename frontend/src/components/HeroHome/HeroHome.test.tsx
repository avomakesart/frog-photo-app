/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { HeroHome } from '..';

describe('components/HeroHome', () => {
  test('should render the component correctly with other components in it', () => {
    const rendered = render(<HeroHome />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
