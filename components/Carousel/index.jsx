import { useRef } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Person from "../Person";
import Carousel from "antd/lib/carousel";
import Row from "antd/lib/row";
import Typography from "antd/lib/typography";

const { Title } = Typography;

export default function PersonCarousel({ people }) {
  const carouselRef = useRef();

  return (
    <>
      <Title level={1} style={{ textAlign: "center", margin: "1em" }}>
        Personalidades
      </Title>
      <Row align="middle" wrap={false}>
        <AiFillLeftCircle
          color="grey"
          size={45}
          onClick={() => carouselRef.current.prev()}
        />
        <Carousel style={{ width: "70vw" }} draggable ref={carouselRef}>
          {people.map((e) => (
            <Person key={`person-${e.name}`} person={e} />
          ))}
        </Carousel>
        <AiFillRightCircle
          color="grey"
          size={45}
          onClick={() => carouselRef.current.next()}
        />
      </Row>
    </>
  );
}
