import Image from "next/image";
import Typography from "antd/lib/typography";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

const { Paragraph, Title } = Typography;

export default function Person({ person }) {
  return (
    <Row justify="center" gutter={32}>
      <Col span={24} sm={8}>
        <Image width="900" height="900" src={person.url} />
        <Title level={3} style={{ textAlign: "center" }}>
          {person.name}
        </Title>
      </Col>
      <Col span={24} sm={16} style={{ paddingTop: 10 }}>
        <Title level={4}>Plataforma: {person.platform}</Title>
        <Paragraph>{person.description}</Paragraph>
      </Col>
    </Row>
  );
}
