import React from "react";
import Menu from "antd/lib/menu";

export default function NavBar({ videoRef, peopleRef, textRef, footerRef }) {
  return (
    <Menu>
      <Menu.item
        onClick={() =>
          topRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          })
        }
      />
    </Menu>
  );
}
