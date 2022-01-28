import "./styles.css";

import { useState, useCallback, useMemo } from "react";
import { createAvatar } from "./libs/avatar";
import { Avatar } from "./Avatar";

export default function App() {
  const [value, setValue] = useState('Steven Paul Jobs');
  const [lightness, setLightness] = useState(0.5);
  const [saturation, setSaturation] = useState(0.5);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const avatar = useMemo(
    () => createAvatar(value, { saturation, lightness }),
    [value, saturation, lightness]
  );

  return (
    <div className="App">
      <h1>Default Avatar Generator</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "full",
          marginBottom: "16px",
        }}
      >
        <Avatar avatar={avatar} />
      </div>

      <label style={{ display: "block", marginBottom: "8px" }}>
        <span style={{marginRight: '8px'}}>Hash input</span>
        <input
          type="text"
          value={value}
          placeholder="Enter a full name"
          onChange={handleChange}
        />
      </label>

      <label style={{ display: "block", marginBottom: "8px" }}>
        <span style={{marginRight: '8px'}}>Lightness</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={lightness}
          onChange={(e) => setLightness(parseFloat(e.target.value))}
        />
      </label>

      <label style={{ display: "block", marginBottom: "8px" }}>
        <span style={{marginRight: '8px'}}>Saturation</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={saturation}
          onChange={(e) => setSaturation(parseFloat(e.target.value))}
        />
      </label>
    </div>
  );
}
