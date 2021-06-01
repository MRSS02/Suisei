import React from "react";
import Typography from "antd/lib/typography";

const { Title } = Typography;

export default function Video({ url }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title style={{ textAlign: "center", margin: "1em" }}>
        Personalidades da internet:
        <Title level={3}> Quando o rosto não é mais necessário.</Title>
      </Title>
      <div className="video-wrapper">
        <iframe width="100%" height="100%" src={url} allowFullScreen></iframe>
      </div>
    </div>
  );
}
