import { useState, useRef } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Person from "../Person";
import Carousel from "antd/lib/carousel";
import Row from "antd/lib/row";
import Typography from "antd/lib/typography";

const { Title } = Typography;

export default function PeopleCarousel({ people }) {
  const carouselRef = useRef();
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <div>
      <Title style={{ textAlign: "center", margin: "1em" }}>
        Personalidades
      </Title>
      <Row align="middle" wrap={false}>
        <AiFillLeftCircle
          style={{
            cursor: "pointer",
            color: hoverLeft ? "white" : "grey",
            transition: "color 0.5s ease",
          }}
          onMouseOver={() => setHoverLeft(true)}
          onMouseOut={() => setHoverLeft(false)}
          size={45}
          onClick={() => carouselRef.current.prev()}
        />
        <Carousel
          style={{ width: "70vw" }}
          draggable
          ref={carouselRef}
          dots={false}
        >
          {people.map((e) => (
            <Person key={`person-${e.name}`} person={e} />
          ))}
        </Carousel>
        <AiFillRightCircle
          style={{
            cursor: "pointer",
            color: hoverRight ? "white" : "grey",
            transition: "color 0.5s ease",
          }}
          onMouseOver={() => setHoverRight(true)}
          onMouseOut={() => setHoverRight(false)}
          size={45}
          onClick={() => carouselRef.current.next()}
        />
      </Row>
    </div>
  );
}
