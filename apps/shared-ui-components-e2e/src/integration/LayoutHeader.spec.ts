import { label } from '../support/LayoutHeader.po';

describe('Layout', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=shared-ui-components-layout-header--example')
  );

  it('should contain "Hello World"', () => {
    label().contains('Hello World');
  });
});
