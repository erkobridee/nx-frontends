import * as React from 'react';

import '@nx-frontends/shared/assets/styles-site.scss';

import Layout from './index';

export default {
  title: 'shared/ui-components/Layout',
  component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const Example = Template.bind({});
Example.args = {
  headerGreetings: 'Hello World',
  children: 'content',
};
Example.argTypes = {
  headerGreetings: { control: 'text' },
};
