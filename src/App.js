import React from "react";
import Slotmachine from "./Slotmachine";
import Heading from "./Heading";

const App = () => {
  return (
    <>
      <div className="rapper">
        <Heading />
        <div className="result">
          <Slotmachine x="😄" y="😄" z="😄" />
          <hr />
          <Slotmachine x="👑" y="7️⃣" z="🍎" />
          <hr />
          <Slotmachine x="😄" y="😄" z="👑" />
          <hr />
          <Slotmachine x="7️🌹" y="🍎" z="7️⃣" />
          <hr />
          <Slotmachine x="👑" y="👑" z="👑" />
          <hr />
          <Slotmachine x="🌹" y="👑" z="🍎" />
          <hr />
        </div>
      </div>
    </>
  );
};

export default App;
