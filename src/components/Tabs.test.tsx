import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Tabs, { Tab } from './Tabs';
import '@testing-library/jest-dom'

test('Tabs renders expected children', async () => {
  render(<Tabs >
          <Tab label="Forms">tab 1 content</Tab>
          <Tab label="Names">tab 2 content</Tab>
          <Tab label="Favorite Animals">tab 2 3 content</Tab>
        </Tabs>);

  // expected tab one content
  expect(screen.queryByText('tab 1 content')).toBeTruthy();

  // tab 2 content should no show
  expect(screen.queryByText('tab 2 content')).toBeFalsy();

  // expected first label
  expect(screen.queryByText('Forms')).toBeTruthy();

  // expected last label
  expect(screen.queryByText('Favorite Animals')).toBeTruthy();
});

export { }