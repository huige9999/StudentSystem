import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AddOrEdit from "./components/AddOrEdit";
import Detail from "./components/Detail";
import "./css/App.css";

function App() {
  return (
    // 最外层容器
    <div id="app" className="container">
      {/* 顶部导航栏 */}
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/home">
              学生管理系统
            </NavLink>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/home" className="navigation">主页</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navigation">关于我们</NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/add" className="navigation">添加用户</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* 匹配上的路由显示在这个位置 */}
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddOrEdit />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<AddOrEdit />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
