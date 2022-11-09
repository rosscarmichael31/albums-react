import { Listened } from "./Listened.js";

export const Album = (props) => {
  return (
    <div className="album">
      <div className="name">{props.name}</div>
      <div className="artist">{props.artist}</div>
      <div className="cover">
        <img src={props.cover} alt="the album cover" />
      </div>
      <div className="released">{props.released}</div>

      <Listened />
    </div>
  );
};
