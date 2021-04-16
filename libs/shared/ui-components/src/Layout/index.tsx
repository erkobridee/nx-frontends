import * as React from 'react';
import cn from 'classnames';

import LayoutHeader from './Header';
import LayoutFooter from './Footer';

import './_styles.scss';

export interface ILayoutProps {
  className?: string;
  headerGreetings: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayoutProps> = ({
  className,
  headerGreetings,
  children,
}) => (
  <div className={cn('layout', className)}>
    <div className="layout__container">
      <LayoutHeader className="layout__header" greetings={headerGreetings} />
      <div className="layout__content">{children}</div>
      <LayoutFooter className="layout__footer" />
    </div>
  </div>
);

export default Layout;
