import { useContext } from 'react';

import './Sidecar.css';
import TagList from './TagList';

import { PrefsContext } from '../PrefsContext';

export default function Sidecar({ steam_item_tags: steam_item_tags }) {
  const { prefs, setPrefs } = useContext(PrefsContext);
  // const colors = prefs.colors;
  console.log('M-PREFS');
  console.log(prefs);

  return (
    <div id="miasmantic_sidecar">
      <div id="miasmantic_sidecar_title">miasmANTIc</div>
      {/* <span style={{ backgroundColor: prefs.colors.like }}>like</span>
      <span style={{ backgroundColor: prefs.colors.dislike }}>dislike</span> */}
      <TagList steam_item_tags={steam_item_tags} line_breaks={true} />
    </div>
  );
}
