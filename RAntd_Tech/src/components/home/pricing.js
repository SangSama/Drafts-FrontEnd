import React from 'react';
import { List, Card, Button } from 'antd';

const items = [
  {
    key: "1",
    title: "basic",
    content: {
      price: "£29.99",
      space: "1 GB of space",
      user:"1 user",
      support: "24/7 support",
      backup: "Safe, reliable backup",
      access: "Access from anywhere"
    }
  },
  {
    key: "2",
    title: "premium",
    content: {
      price: "£59.99",
      space: "5 GB of space",
      user:"5 users",
      support: "24/7 support",
      backup: "Safe, reliable backup",
      access: "Access from anywhere"
    }
  },
  {
    key: "3",
    title: "enterprise",
    content: {
      price: "£99.99",
      space: "Unlimited space",
      user:"15 users",
      support: "24/7 support",
      backup: "Safe, reliable backup",
      access: "Access from anywhere"
    }
  }
]

function AppPricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a plan to fit your needs</h2>
          <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
        </div>
        <List
          grid={{ 
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content["price"]}</p>
                <p>{item.content["space"]}</p>
                <p>{item.content["user"]}</p>
                <p>{item.content["support"]}</p>
                <p>{item.content["backup"]}</p>
                <p>{item.content["access"]}</p>
                <Button type="primary" size="large"><i className="fab fa-telegram-plane"></i>Get Started</Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default AppPricing;