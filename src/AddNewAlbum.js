import { useState } from "react";

import { Modal } from "./Modal.js";
import { NewAlbumForm } from "./NewAlbumForm.js";

export const AddNewAlbum = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="add-album">
      <button onClick={() => setShow(true)}>+ New Album</button>
      <Modal
        onClose={() => setShow(false)}
        title="Add New Album"
        children={
          <NewAlbumForm
            albums={props.albums}
            newAlbum={props.newAlbum}
            setNewAlbum={props.setNewAlbum}
          />
        }
        show={show}
      />
    </div>
  );
};
