import {Fragment} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router";
import Header from "./components/main/header";
import Home from "./components/main/home";
import InfoList from "./components/busan/infoList";
import InfoFind from "./components/busan/infoFind";
function App() {
  return (
      <Fragment>
        <Router>
          <Header/>
          <Routes>
            {/* 실행 화면을 지정 */}
            <Route path="/" element={<Home/>}/>
            <Route path="/busan/info_list" element={<InfoList/>}/>
            <Route path="/busan/info_find" element={<InfoFind/>}/>
          </Routes>
        </Router>
      </Fragment>
  )
}

export default App;
