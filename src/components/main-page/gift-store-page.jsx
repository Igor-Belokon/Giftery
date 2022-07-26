import { useState } from "react";
import CategoryButton from "../cattegory-page/category-block";
import Table from "../cattegory-page/table";
import TableGifts from "../gift-page/gift-page";

import { Steps } from "antd";

const { Step } = Steps;

export function StorePage() {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const renderPanel = (index) => {
    switch (index) {
      case 1:
        return (
          <div
            style={{
              minWidth: "100%",
              minHeight: "100vh",
              backgroundColor: "#F9FAFB",
            }}
          >
            <TableGifts></TableGifts>
          </div>
        );
      case 2:
        return <div>third</div>;
      case 3:
        return <div>fourth</div>;
      default:
      case 0:
        return (
          <div>
            {" "}
            <Table></Table>{" "}
          </div>
        );
    }
  };

  return (
    <div style={{ minWidth: "100%" }}>
      <div style={{ minWidth: "100%", minHeight: "10vh" }}>gifty market</div>
      <div style={{ padding: "2%", backgroundColor: "#F9FAFB" }}>
        <div className="logo">logo</div>
        <div className="table">
          <div className="aboutUs">about us</div>
          <Steps
            type="navigation"
            current={current}
            onChange={onChange}
            className="site-navigation-steps"
            style={{ minWidth: "100%" }}
          >
            <Step style={{ flex: 1 }} status="finish" title="Категории">
              123
            </Step>
            <Step style={{ flex: 1 }} status="process" title="Сертификат" />
            <Step style={{ flex: 1 }} status="wait" title="Сегмент отправки" />
            <Step style={{ flex: 1 }} status="wait" title="Отправить" />
          </Steps>
          <div className="window">{renderPanel(current)}</div>
        </div>
      </div>
    </div>
  );
}
