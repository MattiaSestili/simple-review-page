import { Col, Container, Row } from "react-bootstrap";
import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { UserReviewChart } from "./Components/userReviewChart";
import { LatestComment } from "./Components/latestComment";

export const HomeContainer: FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <UserReviewChart />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Col>
          <LatestComment />
        </Col>
      </Row>
    </Container>
  );
};
