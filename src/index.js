import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './client/components/home';

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<Home/>);