import { createRoot } from 'react-dom/client';
import { App } from './app';
import siteData from 'jaguar:site-data';
import { BrowserRouter } from 'react-router-dom';

function renderInBrowser() {
  console.log(siteData);
  const containerEl = document.getElementById('root');
  if (!containerEl) {
    throw new Error('#root element not found');
  }
  createRoot(containerEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

renderInBrowser();
