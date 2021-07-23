/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { Button } from '..';

describe('components/Button', () => {
  const props = {
    type: undefined,
    disabled: false,
    btnType: 'primary',
    onClick: () => console.log('Hey i am a test'),
    className: 'uppercase',
  };

  test('should render the component correctly with all the props', () => {
    const rendered = render(<Button {...props}>Hello world</Button>);
    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the component correctly with just the mandatory props', () => {
    const rendered = render(<Button type='button'>Hello world</Button>);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
