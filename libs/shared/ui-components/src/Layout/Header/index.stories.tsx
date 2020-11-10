import * as React from 'react';

import Header from './index';

export default {
	title: 'shared/ui-components/Layout/Header',
	component: Header,
};

const Template = (args) => <Header {...args} />;

export const Example = Template.bind({});
Example.args = {
	greetings: 'Hello World',
};
Example.argTypes = {
	greetings: { control: 'text' },
};
