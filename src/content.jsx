import { createRoot } from 'react-dom/client';

import './content.css';

import Sidecar from './components/Sidecar.jsx';

const container_id = 'sidecar_container';

// Create the container and add it to the body
const sidecar_container = document.createElement('div');
sidecar_container.id = container_id;
document.body.appendChild(sidecar_container);

// Create the root and render the Sidecar into it
const root = createRoot(sidecar_container);
root.render(<Sidecar />);
