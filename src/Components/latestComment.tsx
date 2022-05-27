import { Form } from "react-bootstrap";
import { StarRating } from "./starRating";

export const LatestComment = () => {
  return (
    <div style={{ border: "1px solid darkgrey", borderRadius: 6, padding: 10, overflowY: "scroll", height: "22rem" }}>
      <div style={{ marginBottom: 5 }}>
        <h4>{"Jane Doe"}</h4>

        <Form.Group className="mb-3">
          <Form.Label>{"Rating"}</Form.Label>
          <StarRating rated={3} isCommentSection={true} />
        </Form.Group>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mi nisl. Mauris nec eleifend velit. Quisque
          dapibus augue et egestas venenatis. Donec rutrum massa nec suscipit venenatis. Sed laoreet velit et arcu
          blandit, in accumsan mi tempus. Mauris semper, ante non tristique facilisis, neque nisi fringilla diam,
          malesuada ullamcorper quam enim et metus. Suspendisse ultricies metus in sodales consectetur. Etiam gravida
          pulvinar diam, quis mattis erat euismod ut. Proin lobortis purus mauris. Donec non venenatis dolor. Proin nec
          elit nec felis iaculis fermentum ut at magna. Nam sed diam vitae mi vulputate egestas vitae porttitor justo.
          Sed ac orci lorem. Nulla eget justo tincidunt, rutrum risus at, consectetur libero. Ut felis lacus, iaculis
          quis orci ullamcorper, tincidunt tincidunt metus. Nulla facilisis dolor id nisl eleifend, nec venenatis orci
          dictum.
        </p>
      </div>

      <div>
        <h4>{"John Doe"}</h4>

        <Form.Group className="mb-3">
          <Form.Label>{"Rating"}</Form.Label>
          <StarRating rated={2} isCommentSection={true} />
        </Form.Group>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mi nisl. Mauris nec eleifend velit. Quisque
          dapibus augue et egestas venenatis. Donec rutrum massa nec suscipit venenatis. Sed laoreet velit et arcu
          blandit, in accumsan mi tempus. Mauris semper, ante non tristique facilisis, neque nisi fringilla diam,
          malesuada ullamcorper quam enim et metus. Suspendisse ultricies metus in sodales consectetur. Etiam gravida
          pulvinar diam, quis mattis erat euismod ut. Proin lobortis purus mauris. Donec non venenatis dolor. Proin nec
          elit nec felis iaculis fermentum ut at magna. Nam sed diam vitae mi vulputate egestas vitae porttitor justo.
          Sed ac orci lorem. Nulla eget justo tincidunt, rutrum risus at, consectetur libero. Ut felis lacus, iaculis
          quis orci ullamcorper, tincidunt tincidunt metus. Nulla facilisis dolor id nisl eleifend, nec venenatis orci
          dictum.
        </p>
      </div>
    </div>
  );
};
