import React from 'react';
import { render } from '@testing-library/react';

import LayoutHeader from './index';

describe(' LayoutHeader', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<LayoutHeader greetings="hello world" />);
		expect(baseElement).toBeTruthy();
	});
});
