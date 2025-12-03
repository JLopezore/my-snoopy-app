const React = require('react');

module.exports = {
  BrowserRouter: ({ children }) => React.createElement(React.Fragment, null, children),
  MemoryRouter: ({ children }) => React.createElement(React.Fragment, null, children),
  Routes: ({ children }) => React.createElement(React.Fragment, null, children),
  Route: ({ element, children }) => element || React.createElement(React.Fragment, null, children),
  Link: ({ children, ...props }) => React.createElement('a', props, children),
  Outlet: () => React.createElement('div', { 'data-testid': 'outlet' }),
};