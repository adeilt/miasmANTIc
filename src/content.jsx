import React from 'react';
import { createRoot } from 'react-dom/client';

import "./content.css";

const container_id = 'sidecar_container';

// Create the container and add it to the body
const sidecar_container = document.createElement('div');
sidecar_container.id = container_id;
document.body.appendChild(sidecar_container);

// Create the root and render the Sidecar into it
const root = createRoot(sidecar_container);
root.render(<Sidecar />);

// The only React component in this whole mess.  :)
function Sidecar () {
  return <div id="sidecar">I'm a sidecar!  Vroom!</div>;
}