import { Button, Form } from "react-bootstrap";
import { StarRating } from "./starRating";
import { FormEvent, useState } from "react";

interface Review {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

export const ReviewForm = () => {
  const [review, setReview] = useState<Review>({ name: "", email: "", rating: 0, comment: "" });

  const onReviewSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();

    setReview({
      ...review,
      name: e.currentTarget["name"],
      email: e.currentTarget["email"],
      comment: e.currentTarget["comments"]
    });
  };

  return (
    <Form onSubmit={onReviewSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>{"Name"}</Form.Label>
        <Form.Control name="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{"Email"}</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{"Rating"}</Form.Label>
        <StarRating onRated={(rating) => setReview({ ...review, rating: rating })} isCommentSection={false} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Comments</Form.Label>
        <Form.Control name={"comments"} as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
