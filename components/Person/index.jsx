import Image from "next/image";
import Typography from "antd/lib/typography";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Button from "antd/lib/button";

const { Paragraph, Title } = Typography;

export default function Person({ person }) {
  return (
    <Card
      hoverable
      style={{
        background:
          "linear-gradient(0deg, rgba(225,225,255,1) 0%, rgba(255,255,255,1) 100%)",
        cursor: "default",
        boxShadow: "100px, 100px, #000",
        margin: "1em",
        borderRadius: "16px",
      }}
      className="person-card"
    >
      <Row
        justify="center"
        gutter={32}
        style={{ margin: "1em", height: "auto" }}
      >
        <Col span={24} sm={8}>
          <Image
            loading="eager"
            width="900"
            height="900"
            src={person.imageUrl}
          />
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
            style={{ borderRadius: 20 }}
            type="primary"
            size="large"
            onClick={() => (window.location.href = person.url)}
          >
            Saiba mais!
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
