import { useState } from 'react';

import './Sidecar.css';
import TagList from './TagList';

export default function Sidecar({ user_data, preferences, steam_tags }) {
  return (
    <div id="miasmantic_sidecar">
      <div id="miasmantic_sidecar_title">miasmANTIc</div>
      <TagList steam_tags={steam_tags} line_breaks={true} />
    </div>
  );
}
