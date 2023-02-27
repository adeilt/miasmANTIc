import './Sidecar.css';
import TagList from './TagList';

export default function Sidecar() {
  return (
    <div id="miasmantic_sidecar">
      <div id="miasmantic_sidecar_title">miasmANTIc</div>
      <TagList line_breaks={true} />
    </div>
  );
}
