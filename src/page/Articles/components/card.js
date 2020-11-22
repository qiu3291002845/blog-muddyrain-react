import React from "react";
import { Card, Avatar, Tag, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./card.scss";
import { ellipsis } from "../../../Tools/Config";
const { Meta } = Card;
class ArticleCard extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <>
        <div className="marginBox bg-light d-flex">
          {list.map((item) => (
            <Card
              className="mx-2 articleCard"
              key={item.key}
              hoverable
              style={{ width: "20rem" }}
              cover={<Image alt="example" src={item.viewImg} />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar
                    width={75}
                    height={75}
                    src={item.userInfo.user_avatar}
                  />
                }
                title={<span>{item.article_title}</span>}
                description={
                  <>
                    <span>{item.userInfo.user_nickname}</span>
                    <Tag className="ml-2" color="blue">
                      {item.classifyInfo.classify_name}
                    </Tag>
                    <p className="mt-2">{ellipsis(item.article_content)}</p>
                  </>
                }
              />
            </Card>
          ))}
        </div>
      </>
    );
  }
}

export default ArticleCard;
