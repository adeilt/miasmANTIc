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
root.render(
  <React.StrictMode>
    <Sidecar
      user_data={{ user_tags: {} }}
      preferences={{ colors: {} }}
      steam_tags={get_steam_tags()}
    />
  </React.StrictMode>,
);

function get_steam_tags() {
  let steam_tags = Array.from(
    document
      .getElementsByClassName('glance_tags popular_tags')[0]
      .getElementsByTagName('a'),
  );

  return steam_tags.map((tag) => tag.innerText.trim());
}

chrome.storage.sync.get(['user_data', 'preferences'], function (response) {
  var user_tags = response['user_tags'] ? response['user_tags'] : {};
  var preferences = response['preferences'] ? response['preferences'] : {};
});
