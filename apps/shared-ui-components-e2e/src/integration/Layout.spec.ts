import { header, content, footer } from '../support/Layout.po';

describe('Layout', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=shared-ui-components-layout--example')
	);

	describe('Header', () => {
		it('should contain "Hello World"', () => {
			header().contains('Hello World');
		});
	});

	describe('Content', () => {
		it('should contain "content"', () => {
			content().contains('content');
		});
	});

	describe('Footer', () => {
		it('should exist', () => {
			footer().should('exist');
		});
	});
});
