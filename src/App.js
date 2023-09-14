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
import Convert1a from "./ConvertClassComponentToFuncComponent/Convert1a";
import Convert1b from "./ConvertClassComponentToFuncComponent/Convert1b";
import Convert1c from "./ConvertClassComponentToFuncComponent/Convert1c";

function App() {
  return (
    <div>
      <div>
        <h1>Functional Component</h1>
        <div>
          <h2>Exercise 1:</h2>
          <Exercise1Component />
        </div>
        <div>
          <h2>Exercise 2:</h2>
          <Exercise2Component />
        </div>
        <div>
          <h2>Exercise 3:</h2>
          <Exercise3Component />
        </div>
        <div>
          <h2>Exercise 4:</h2>
          <Exercise4Component />
        </div>
      </div>
      <div>
        <h1>Class Component</h1>
        <div>
          <h2>Exercise 1:</h2>
          <div>
            <h3>1a:</h3>
            <div style={{ display: "flex" }}>
              <Ex1aClassComponent />
              <Ex1aClassComponent />
              <Ex1aClassComponent />
            </div>
          </div>
          <div>
            <h3>1b:</h3>
            <Ex1bComponent />
          </div>
          <div>
            <h3>1c:</h3>
            <div style={{ display: "flex" }}>
              <Ex1cLeftComponent />
              <Ex1cCenterComponent />
              <Ex1cRightComponent />
            </div>
          </div>
          <div>
            <h3>1d:</h3>
            <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
              <Ex1dHeaderComponent />
              <Ex1dSideComponent />
              <Ex1dContentComponent />
              <Ex1dFooterComponent />
            </div>
          </div>
          <div>
            <h3>1e:</h3>
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
            <h3>1f:</h3>
            <div style={{ padding: "10px" }}>
              <Table1Component />
            </div>
            <div style={{ padding: "10px" }}>
              <Table2Component />
            </div>
          </div>
        </div>
        <div>
          <h2>Exercise 2:</h2>
          <div>
            <h3>2b:</h3>
            <FilterableProductTable />
          </div>
        </div>
        <div>
          <h2>Exercise 3:</h2>
          <div>
            <h3>Covert 1a:</h3>
            <div style={{ display: "flex" }}>
              <Convert1a />
              <Convert1a />
              <Convert1a />
            </div>
          </div>
          <div>
            <h3>Covert 1b:</h3>
            <Convert1b />
          </div>
          <div>
            <h3>Covert 1c:</h3>
            <Convert1c />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
