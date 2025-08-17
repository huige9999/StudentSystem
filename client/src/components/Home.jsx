import React, { useState, useEffect } from "react";
import { getStuList } from "../api/stuApi";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [stuList, setStuList] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  // 空数组作为依赖项意味着副作用只会在组件挂载时执行一次
  useEffect(() => {
    getStuList().then((res) => {
      setStuList(res.data);
    });
  }, []);

  const trs = stuList.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>详情</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>学生列表</h1>
      {/* 搜索框 */}
      <input
        type="text"
        placeholder="搜索"
        className="form-control"
        value={searchValue}
        onChange={handleChange}
      />
      {/* 表格 */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>联系方式</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
