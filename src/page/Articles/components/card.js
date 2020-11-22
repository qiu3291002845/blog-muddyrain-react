import React from "react";
import { Card } from "antd";
const { Meta } = Card;
class ArticleCard extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <>
        <div className="marginBox bg-light">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </>
    );
  }
}

export default ArticleCard;
