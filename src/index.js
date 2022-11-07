import React from 'react';
import { createRoot} from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/app.css';

createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <TodoContainer /> 
  </React.StrictMode>,
); 
  