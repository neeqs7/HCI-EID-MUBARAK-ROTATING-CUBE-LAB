import React, { useState, useEffect } from "react";
import "./Cube.css";

const Cube = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 4000); // open after 4s
  }, []);

  const faces = [
    { name: "front", img: "https://i.pinimg.com/736x/15/30/52/1530521d93c78ee4783712e39e396c43.jpg" },
    { name: "back", img: "https://i.pinimg.com/originals/cf/d8/0a/cfd80a41d04dcf01fffb1510599d7d03.jpg" },
    { name: "right", img: "https://th.bing.com/th/id/OIP.esvn6ZaDwdx-g7ts_aNoaAHaHa?w=219&h=219&c=7&r=0&o=7&pid=1.7&rm=3" },
    { name: "left", img: "https://th.bing.com/th?q=Eid+Black+and+Gold+Decor&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247" },
    { name: "top", img: "https://i.pinimg.com/originals/25/34/6c/25346cb5887e73e6d18051f74b19a297.jpg" },
    { name: "bottom", img: "https://dornsife.usc.edu/news/wp-content/uploads/sites/7/2023/04/eid-al-fitr_conversation_newsite.jpg" },
  ];

  return (
    <div className="scene">
      <div className={`cube ${open ? "open" : ""}`}>
        {faces.map((face) => (
          <div
            key={face.name}
            className={`face ${face.name}`}
            style={{ backgroundImage: `url(${face.img})` }}
          />
        ))}
      </div>

      {open && <h1 className="eid-text">EID MUBARAK</h1>}
    </div>
  );
};

export default Cube;