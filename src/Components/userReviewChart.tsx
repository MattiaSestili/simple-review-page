import { Col, Row } from "react-bootstrap";
import { ReviewForm } from "./reviewForm";
import { TrendsChart } from "./trendsChart";

export const UserReviewChart = () => {
  return (
    <Row>
      <Col xs={12} sm={6}>
        <ReviewForm />
      </Col>

      <Col xs={12} sm={6}>
        <TrendsChart />
      </Col>
    </Row>
  );
};
