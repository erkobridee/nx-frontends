import * as React from 'react';
import cn from 'classnames';

import { ReactComponent as Logo } from '@nx-frontends/shared/assets/images/logo.svg';

import './_styles.scss';

export interface ILayoutHeaderProps {
	className?: string;
	greetings: React.ReactNode;
}

export const LayoutHeader: React.FunctionComponent<ILayoutHeaderProps> = ({
	className,
	greetings,
}) => (
	<header className={cn('layout-header', className)}>
		<Logo width="75" height="75" />
		<h1>{greetings}</h1>
	</header>
);

export default LayoutHeader;
