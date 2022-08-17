import React from "react";
import { Link } from "react-router-dom";

function InfoList({ info, offset }) {
  console.log("info : ", info);
  return (
    <tbody>
      {info.slice(offset, offset + 10).map((item) => {
        return (
          <tr className="bg-white border-2 border-gray-200 h-14">
            <td className="px-4 py-3 ">{item.id}</td>
            <td className="px-4 py-3 ">
              {" "}
              {item.title}
              {/* <Link
                to={{ pathname: "/descDetail", state: { _id: item.id } }}
                style={{ color: "#909090" }}
              >
                {item.userId}
              </Link> */}
            </td>
            <td className="px-4 py-3 ">{item.id}</td>
            <td className="px-4 py-3 ">{item.id}</td>

            <td className="px-4 py-3 ">{item.userId}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default InfoList;
