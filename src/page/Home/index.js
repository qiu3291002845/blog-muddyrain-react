import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Slider, MHeader } from "./components";
const { Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Slider />
        <Layout className="site-layout">
          <MHeader />

          <Content
            className="site-layout-background"
            style={{ background: "#f0f3fa" }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default connect()(Home);
