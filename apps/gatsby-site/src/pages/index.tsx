import React from 'react';

import Layout from '@nx-frontends/shared/ui-components/Layout';

import { ReactComponent as Logo } from '@nx-frontends/shared/assets/images/logo.svg';
import { ReactComponent as Star } from '@nx-frontends/shared/assets/images/star.svg';

import {
  GatsbyAstronautImage,
  GatsbyLogoImage,
  NxLogoImage,
} from '../components/Image';

import '@nx-frontends/shared/assets/styles-site.scss';
import './_styles.scss';

export const Index = () => (
  <Layout className="app" headerGreetings="Welcome to gatsby-site!">
    <main>
      <p>content of the gatsby-site...</p>
    </main>
    <br />
    <div className="svg-images">
      <span>SVG images: </span>
      <Logo width="75" height="75" />
      <Star width="45" height="45" />
    </div>
    <br />
    <div className="gatsby-images">
      <GatsbyAstronautImage />
      <GatsbyLogoImage />
      <NxLogoImage />
    </div>
  </Layout>
);

export default Index;
