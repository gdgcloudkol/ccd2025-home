import React from 'react';

import { createRoot } from 'react-dom/client';
import Home from './index';

if (typeof window !== 'undefined') {
  class CCD2025Home extends HTMLElement {
    connectedCallback() {
      window.React = React;
      const root = createRoot(this);
      root.render(<Home />);
    }

    // disconnectedCallback() { }
  }

  customElements.define('ccd2025-home', CCD2025Home);
}

const Dummy = () => <></>;

export default Dummy;