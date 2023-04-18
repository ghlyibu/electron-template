import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

function render() {
  const root = ReactDOMClient.createRoot(document.body as HTMLElement)
  root.render(<h2>Hello from React!</h2>);
}

render();

