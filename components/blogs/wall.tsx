import React from "react";
import { Card } from "react-bootstrap";
import Img from "next/image";
import news1 from "../../assets/herobg.jpg";
import Link from "next/link";
const Wall = () => {
  return (
    <>
      <div className="blogs-contents">
        <Card>
          <Card.Header>
            <h3>Mindev solution launch 2022 as software development company</h3>
            <p>
              mindev founder{" "}
              <Link href="https://jonathandigay.web.app">Jonathan Digay</Link>
            </p>
          </Card.Header>

          <Card.Body>
            <div className="img">
              <Img src={news1} className="newsimg" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              provident veritatis ipsum eius velit asperiores magnam accusantium
              in quod odio architecto deserunt, reiciendis fugit nihil minima,
              minus ex laborum cupiditate consequuntur. Repudiandae,
              voluptatibus temporibus molestias blanditiis delectus deserunt ex
              perferendis mollitia veniam porro consequatur dignissimos fuga
              quis quo praesentium dolores incidunt. Molestias ducimus facilis,
              ratione vitae quisquam illo aspernatur omnis et eveniet quod vel,
              saepe facere! Cupiditate sapiente quibusdam ab!
            </p>
            <button>show more</button>
          </Card.Body>
        </Card>{" "}
        <Card>
          <Card.Header>
            <h3>Mindev solution launch 2022 as software development company</h3>
            <p>
              mindev founder{" "}
              <Link href="https://jonathandigay.web.app">Jonathan Digay</Link>
            </p>
          </Card.Header>

          <Card.Body>
            <div className="img">
              <Img src={news1} className="newsimg" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              provident veritatis ipsum eius velit asperiores magnam accusantium
              in quod odio architecto deserunt, reiciendis fugit nihil minima,
              minus ex laborum cupiditate consequuntur. Repudiandae,
              voluptatibus temporibus molestias blanditiis delectus deserunt ex
              perferendis mollitia veniam porro consequatur dignissimos fuga
              quis quo praesentium dolores incidunt. Molestias ducimus facilis,
              ratione vitae quisquam illo aspernatur omnis et eveniet quod vel,
              saepe facere! Cupiditate sapiente quibusdam ab!
            </p>
            <button>show more</button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Wall;
