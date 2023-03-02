import { useContext } from 'react';
import { createRoot } from 'react-dom/client';

import PrefsProvider from './PrefsContext';

import Sidecar from './components/Sidecar.jsx';

import './content.css';

document['miasmantic_state'] = {
  initialized_prefs: false,
  prefs_handoff: null,
};

chrome.storage.sync.get(['user_data', 'prefs'], function (response) {
  const saved_prefs = response['prefs'] ? response['prefs'] : {};
  document.miasmantic_state.prefs_init = saved_prefs;
  document.miasmantic_state.initialized_prefs = true;
});

const container_id = 'sidecar_container';

// Create the container and add it to the body
const sidecar_container = document.createElement('div');
sidecar_container.id = container_id;
document.body.appendChild(sidecar_container);

// Create the root and render the Sidecar into it
const root = createRoot(sidecar_container);
root.render(
  <React.StrictMode>
    <PrefsProvider>
      <Sidecar steam_tags={get_steam_tags()} />
    </PrefsProvider>
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
