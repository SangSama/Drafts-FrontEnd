import React from 'react';
import { Row, Col, Card } from 'antd';

import img01 from '../../images/six01.jpg';
import img02 from '../../images/six02.jpg';
import img03 from '../../images/six03.jpg';
import img04 from '../../images/six04.jpg';
import img05 from '../../images/six05.jpg';
import img06 from '../../images/six06.jpg';

const { Meta } = Card;

const items = [
  {
    key: "1",
    title: "Modern Design",
    img: img01
  },
  {
    key: "2",
    title: "Clean and Elegant",
    img: img02
  },
  {
    key: "3",
    title: "Great Support",
    img: img03
  },
  {
    key: "4",
    title: "Easy to customise",
    img: img04
  },
  {
    key: "5",
    title: "Unlimited Features",
    img: img05
  },
  {
    key: "6",
    title: "Advanced Options",
    img: img06
  }
]

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fuild">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Row gutter={[16, 16]}>
          {
            items.map( item => {
              return (
                <Col md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }} key={item.key}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={item.img}/>}
                  >
                    <Meta title={item.title} />
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;