import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from '../Todo';

test('Shound render  todo component', () =>{
  render(<Todo />)
})