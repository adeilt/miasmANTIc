import './Taglist.css';

export default function TagList({
  steam_item_tags: steam_item_tags,
  line_breaks = false,
}) {
  return (
    <div id="user_tag_list_div" className="user_tag_list">
      <div className="user_tag_list_title">Tags</div>
      <ul id="user_tag_list" className="user_tag_list">
        {steam_item_tags.map((tag_id) => (
          <Tag id={tag_id} key={tag_id} line_breaks={line_breaks} />
        ))}
      </ul>
    </div>
  );
}

function Tag({ id, like = 'neutral', line_breaks = false }) {
  return (
    <li
      id={id}
      className="user_tag"
      style={{
        display: line_breaks ? 'block' : 'inline-block',
        backgroundColor: '#CCCCCC',
      }}
    >
      {id}
    </li>
  );
}
