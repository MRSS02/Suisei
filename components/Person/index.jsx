import Image from "next/image";
import Typography from "antd/lib/typography";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Button from "antd/lib/button";

const { Paragraph, Title } = Typography;

export default function Person({ person }) {
  return (
    <Row justify="center" gutter={32} style={{ margin: "1em", height: "auto" }}>
      <Col span={24} sm={8}>
        <Image width="900" height="900" src={person.imageUrl} />
        <Title level={3} style={{ textAlign: "center" }}>
          {person.name}
        </Title>
      </Col>
      <Col
        span={24}
        sm={16}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "auto",
        }}
      >
        <Title level={4}>Plataforma: {person.platform}</Title>
        <Paragraph style={{ textAlign: "justify", height: "100%" }}>
          {person.description}
        </Paragraph>
        <Button
          style={{ alignSelf: "flex-end" }}
          type="primary"
          onClick={() => (window.location.href = person.url)}
        >
          Saiba mais!
        </Button>
      </Col>
    </Row>
  );
}
