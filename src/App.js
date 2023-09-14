import React from "react";
import "./App.css";
import Exercise1Component from "./FunctionComponent/Exercise1Component";
import Exercise2Component from "./FunctionComponent/Exercise2Component";
import Exercise3Component from "./FunctionComponent/Exercise3Component";
import Exercise4Component from "./FunctionComponent/Exercise4Component";
import Ex1aClassComponent from "./ClassComponent/Ex1aClassComponent";
import Ex1bComponent from "./ClassComponent/Ex1bComponent";
import Ex1cLeftComponent from "./ClassComponent/Exercise1c/Ex1cLeftComponent";
import Ex1cCenterComponent from "./ClassComponent/Exercise1c/Ex1cCenterComponent";
import Ex1cRightComponent from "./ClassComponent/Exercise1c/Ex1cRightComponent";
import Ex1dHeaderComponent from "./ClassComponent/Exercise1d/Ex1dHeaderComponent";
import Ex1dSideComponent from "./ClassComponent/Exercise1d/Ex1dSideComponent";
import Ex1dContentComponent from "./ClassComponent/Exercise1d/Ex1dContentComponent";
import Ex1dFooterComponent from "./ClassComponent/Exercise1d/Ex1dFooterComponent";
import Ex1eHeaderComponent from "./ClassComponent/Exercise1e/Ex1eHeaderComponent";
import Ex1eNavComponent from "./ClassComponent/Exercise1e/Ex1eNavComponent";
import Ex1eSectionComponent from "./ClassComponent/Exercise1e/Ex1eSectionComponent";
import Ex1eArticleComponent from "./ClassComponent/Exercise1e/Ex1eArticleComponent";
import Ex1eAsideComponent from "./ClassComponent/Exercise1e/Ex1eAsideComponent";
import Ex1eFooterComponent from "./ClassComponent/Exercise1e/Ex1eFooterComponent";
import Table1Component from "./ClassComponent/Exercise1f/Table1Component";
import Table2Component from "./ClassComponent/Exercise1f/Table2Component";
import FilterableProductTable from "./ClassComponent/Exercise2b/FilterableProductTable";

function App() {
  return (
    <div>
      <div>
        <h1>Functional Component</h1>
        <div>
          Exercise 1:
          <Exercise1Component />
        </div>
        <div>
          Exercise 2:
          <Exercise2Component />
        </div>
        <div>
          Exercise 3:
          <Exercise3Component />
        </div>
        <div>
          Exercise4:
          <Exercise4Component />
        </div>
      </div>
      <div>
        <h1>Class Component</h1>
        <div>
          Exercise 1:
          <div>
            1a:
            <div style={{ display: "flex" }}>
              <Ex1aClassComponent />
              <Ex1aClassComponent />
              <Ex1aClassComponent />
            </div>
          </div>
          <div>
            1b:
            <Ex1bComponent />
          </div>
          <div>
            1c:
            <div style={{ display: "flex" }}>
              <Ex1cLeftComponent />
              <Ex1cCenterComponent />
              <Ex1cRightComponent />
            </div>
          </div>
          <div>
            1d:
            <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
              <Ex1dHeaderComponent />
              <Ex1dSideComponent />
              <Ex1dContentComponent />
              <Ex1dFooterComponent />
            </div>
          </div>
          <div>
            1e:
            <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
              <Ex1eHeaderComponent />
              <Ex1eNavComponent />
              <Ex1eSectionComponent />
              <Ex1eArticleComponent />
              <Ex1eAsideComponent />
              <Ex1eFooterComponent />
            </div>
          </div>
          <div>
            1f:
            <div style={{ padding: "10px" }}>
              <Table1Component />
            </div>
            <div style={{ padding: "10px" }}>
              <Table2Component />
            </div>
          </div>
        </div>
        <div>
          Exercise 2:
          <div>
            2b:
            <FilterableProductTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
