import * as React from 'react';

import '@nx-frontends/shared/assets/styles-site.scss';

import Footer from './index';

export default {
	title: 'shared/ui-components/Layout/Footer',
	component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Example = Template.bind({});
Example.args = {};
