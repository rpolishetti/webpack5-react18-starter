import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/home';
import "./app.css";

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<Home/>);