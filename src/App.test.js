import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom');

test('renderiza App con rutas', () => {
  render(<App />);
  // Renderiza Header y un Outlet simulado
  expect(screen.getByText(/Mi snoopy App/i)).toBeInTheDocument();
  expect(screen.getByTestId('outlet')).toBeInTheDocument();
});
