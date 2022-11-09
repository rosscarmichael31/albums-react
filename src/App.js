import "./App.css";
import { Album } from "./Album.js";
import { AddNewAlbum } from "./AddNewAlbum.js";

import { useState } from "react";
import { albums } from "./data.js";

function App() {
  const [newAlbum, setNewAlbum] = useState({});

  return (
    <div>
      <h1>Albums</h1>
      <AddNewAlbum
        albums={albums}
        newAlbum={newAlbum}
        setNewAlbum={setNewAlbum}
      />
      <div className="container">
        {albums.map((album, index) => {
          console.log(album.name);
          return (
            <Album
              key={index}
              name={album.name}
              artist={album.artist}
              released={album.released}
              cover={album.cover}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
