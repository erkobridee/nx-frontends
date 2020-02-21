import React from 'react';
import { Route, Link } from 'react-router-dom';

import Layout from '@nx-frontends/shared/ui-components/Layout';

import './_styles.scss';

export const App = () => {
  return (
    <Layout className="app" headerGreetings="Welcome to frontend-app-1!">
      <main>
        <p>app content from the frontend-app-1 application</p>
      </main>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </Layout>
  );
};

export default App;
