import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./Addition.css";

function Addition() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="Addition">
        <Form>
          <p className="pt-3 text-center font-details-b pb-3">
            You clicked {count} times
          </p>
          <Button onClick={() => setCount(count + 1)}>Increase</Button>
          <Button onClick={() => setCount(count - 1)}>Decrease</Button>
        </Form>
      </header>
    </div>
  );
}

export default Addition;
