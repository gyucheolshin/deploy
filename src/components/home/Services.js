import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserStateContext } from "../../context/Context";
import { useHistory } from "react-router";

import InfoList from "./InfoList";
import Pagination from "./Pagination";

function Services() {
  const history = useHistory();
  const { homeStatus, setHomeStatus } = useContext(UserStateContext);

  const [info, setInfo] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/users")
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleWrite = () => {
    setHomeStatus({
      ...homeStatus,
      main: false,
      about: false,
      services: true,
      dev: false,
      issue: false,
      write: true,
    });
    history.push("/editor");
  };

  console.log(info);
  return (
    <div className="w-full h-full flex justify-center">
      <div className="container mt-8">
        <div className="w-full text-xl font-bold mt-4 mb-3 text-center">
          <table className="min-w-full table-auto text-gray-800">
            <colgroup>
              <col className="w-10per" />
              <col className="w-50per" />
              <col className="w-15per" />
              <col className="w-10per" />
              <col className="w-10per" />
            </colgroup>
            <thead className="justify-between">
              <tr className="bg-gray-800">
                <th className="text-gray-300 px-4 py-3">구분</th>
                <th className="text-gray-300 px-4 py-3">제목</th>
                <th className="text-gray-300 px-4 py-3">작성자</th>
                <th className="text-gray-300 px-4 py-3">시간</th>
                <th className="text-gray-300 px-4 py-3">조회수</th>
              </tr>
            </thead>
            <InfoList info={info} offset={offset} />
          </table>
        </div>
        <div className="flex justify-center h-16 border-b-2 border-gray-200">
          <div className="w-1/2 h-8 justify-center items-center flex">
            <Pagination
              total={info.length}
              limit={10}
              page={page}
              setPage={setPage}
            />
          </div>
          <button
            className="relative left-80 w-32 h-12 bg-black text-white"
            onClick={handleWrite}
          >
            글쓰기
          </button>
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <select
            name="type"
            // value={quizItemData.type}
            // onChange={(e) =>
            //   setQuizItemData({ ...quizItemData, type: e.target.value })
            // }
            className="w-36 h-10 border-r-2 border-gray-300"
          >
            <option value="VOTE">제목</option>
            <option value="CHOSUNG">내용</option>
            <option value="OX">제목+내용</option>
            <option value="SHORTANSWER">작성자</option>
          </select>
          <input
            type="text"
            placeholder="검색"
            className="w-72 h-10 inset-16 px-2"
          />
          <button className="w-24 h-10 bg-Tan">검색</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
