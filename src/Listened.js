import { useState } from "react";

export const Listened = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="listened">
      <label for="listened-box">Listened?</label>
      <input
        id="listened-box"
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};
