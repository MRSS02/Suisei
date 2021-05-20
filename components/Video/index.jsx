import React from "react";
import Typography from "antd/lib/typography";

const { Title } = Typography;

export default function Video({ url }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title>Bem vindo ao Hublive!</Title>
      <div style={{ width: "50vw", height: "28.125vw" }}>
        <iframe width="100%" height="100%" src={url} allowFullScreen></iframe>
      </div>
    </div>
  );
}
