/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { Grid } from '..';

describe('components/Grid', () => {
  const props = {
    smCols: '2',
    mdCols: '2',
    lgCols: '3',
    xlCols: '4',
    space: '4',
  };

  test('should render the component correctly with all the props', () => {
    const rendered = render(<Grid {...props}>Hey im working fine</Grid>);
    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the component correctly with just the mandatory props', () => {
    const rendered = render(<Grid>Hey im working fine</Grid>);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
