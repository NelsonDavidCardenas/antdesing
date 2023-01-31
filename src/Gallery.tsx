import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://uploads.metropoles.com/wp-content/uploads/2021/09/27110922/GettyImages-1235254664-600x400.jpg"
      />
    }
  >
    <Meta title="The Goat" description="Cr7" />
  </Card>
);

export function Gallery() {
  return (
    <section>
      <h1>SIUUUU</h1>
      <App />
      <App />
      <App />
    </section>
  );
}

export default App;
