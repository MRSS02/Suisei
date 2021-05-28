import React from "react";
import Menu from "antd/lib/menu";

export default function NavBar({ refs }) {
  const handleScroll = (ref) => {
    console.log(ref.current);
    ref.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };
  return (
    <Menu mode="horizontal" className="navbar">
      {refs.map((item) => (
        <Menu.Item onClick={() => handleScroll(item.ref)}>
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );
}
