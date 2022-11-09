import { useState } from "react";

export const NewAlbumForm = (props) => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [released, setReleased] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = () => {
    props.setNewAlbum({
      name: name,
      artist: artist,
      released: released,
      cover: cover,
    });

    props.albums.push(props.newAlbum);
  };

  return (
    <form onSubmit={() => handleSubmit()}>
      {/* Album name */}
      <input
        type="text"
        placeholder="Album name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Artist */}
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      {/* Year */}
      <input
        type="year"
        placeholder="Year released"
        value={released}
        onChange={(e) => setReleased(e.target.value)}
      />

      {/* Image url */}
      <input
        type="url"
        placeholder="Album art URL"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
};
