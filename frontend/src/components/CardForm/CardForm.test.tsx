/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { CardForm } from '..';

describe('components/CardForm', () => {
  const props = {
    formTitle: 'Hey I am a title',
    onSubmit: () => console.log('hey this is a demo'),
    footer: true,
    buttonText: 'Hello world',
  };

  test('should render the component correctly with all the props', () => {
    const rendered = render(<CardForm {...props}>Hello world</CardForm>);
    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the component correctly with just the mandatory the props', () => {
    const rendered = render(<CardForm>Hello world</CardForm>);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
