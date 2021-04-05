import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLanguage } from "../redux/selectors/selectors";
import data from "../data";
import Title from "./components/Title";

export default function CategoryPage() {
  const { category } = useParams();
  const language = useSelector(getLanguage);
  const neededData = language && data[language][category];
  console.log(data);

  return !language ? (
    <h1>LOADING...</h1>
  ) : (
    <>
      <Title fontSize={28} text={data[language].title} />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col>
            <h1 className="title text-center categorytitle">
              {neededData.name}
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {neededData.categories.map((category, index) => {
            return (
              <Col
                md={2}
                lg={2}
                key={index + 1}
                className="title tag text-center mt-3"
              >
                {category.name}
              </Col>
            );
          })}
        </Row>
        <Row>
          {data.images[category].overview.map((image) => {
            return <img className="image" src={image} />;
          })}
        </Row>
      </Container>
    </>
  );
}
