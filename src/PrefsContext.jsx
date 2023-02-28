import { createContext, useReducer } from 'react';

const defaults = {
  colors: {
    like: '#00ff48',
    dislike: '#ff2222',
    neutral: '#cccccc',
  },
};

export const PrefsContext = createContext(defaults);

export const PrefsProvider = (props) => {
  const [colors, setColor] = useReducer(colorReducer, defaults.colors);
  return (
    <PrefsContext.Provider value={{ colors, setColor }}>
      {props.children}
    </PrefsContext.Provider>
  );
};
export default PrefsProvider;

const colorReducer = (colors, new_color) => {
  const { color_name, color_value_input } = new_color;

  // are we resetting to default or just providing a new value?
  let color_value =
    color_value_input === 'DEFAULT'
      ? defaults.prefs.colors[color_name]
      : color_value_input;

  // replace old color value with new value
  let state_updated = [...colors, { [color_name]: color_value }];

  // update prefs stored in Chrome Sync
  chrome.storage.sync
    .get(['prefs'])
    .then((response) => {
      const saved_prefs = response['prefs'] ? response['prefs'] : {};
      let updated_prefs = { ...saved_prefs };
      console.log('saving colors!');
      updated_prefs.colors = colors;
      chrome.storage.sync
        .set({ prefs: udpated_prefs })
        .then((response) => {
          console.log('Prefs saved:' + updated_prefs);
        })
        .catch(() => {
          console.log('Failed to save prefs!');
        });
    })
    .catch(() => {
      console.log(
        'Failed to load current prefs as first step of saving prefs!',
      );
    });

  return state_updated;
};
