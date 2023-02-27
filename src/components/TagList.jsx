import { useState } from 'react';

import './Taglist.css';

export default function TagList({ id_suffix = '' }) {
  // useState[(tags, setTags)] = useState([]);
  let tags = ['test', 'these', 'tags'];
  return (
    <div id="user_tag_list_div{id_suffix}" className="user_tag_list">
      <div className="user_tag_list_title">Tags</div>
      <ul id="user_tag_list{id_suffix}" className="user_tag_list">
        {tags.map((tag_id) => (
          <Tag id={tag_id} key={tag_id} />
        ))}
      </ul>
    </div>
  );
}

function Tag({ id }) {
  return (
    <li id={id} className="user_tag">
      {id}
    </li>
  );
}
