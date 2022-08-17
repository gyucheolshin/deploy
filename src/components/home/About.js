import React from "react";

const About = () => {
  console.log("시이빌");
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-80per h-full mt-8 flex flex-col">
        <div className="w-1/2 h-20 ml-96 text-center mt-14">
          <p className="text-4xl font-bold">BATTLE-Q란?</p>
          <p className="text-gray-500 mt-2">
            BATTLE-Q는 실시간 퀴즈게임 플랫폼입니다.
          </p>
        </div>
        <div className="w-80per h-full mt-2 flex ml-40">
          <div className="w-1/2 h-full items-end ">
            <img
              src="images/aboutImage.png"
              className="w-full h-full object-cover overflow-auto relative left-40 "
            />
          </div>
          <div className="w-1/2 h-full p-28">
            <p className="relative text-3xl right-10 w-full top-10">
              지식과 즐거움을 동시에
            </p>
            <p className="relative text-3xl right-10 w-full top-10">
              즐길 수 있는 실시간
            </p>
            <p className="relative text-3xl right-10 w-full top-10">
              퀴즈게임!
            </p>
            <div className="w-full h-1/2 relative top-16 right-10 grid grid-cols-2 text-center border-2">
              <div className="w-full h-full text-center flex justify-center items-center">
                <p className="text-xl font-bold border-b-2 border-indigo-700">
                  다양한 주제
                </p>
              </div>
              <div className="w-full h-full text-center flex justify-center items-center">
                <p className="text-xl font-bold border-b-2 border-indigo-700">
                  함께
                </p>
              </div>
              <div className="w-full h-full  text-center flex justify-center items-center">
                <p className="text-xl font-bold border-b-2 border-indigo-700">
                  경쟁
                </p>
              </div>
              <div className="w-full h-full  text-center flex justify-center items-center">
                <p className="text-xl font-bold border-b-2 border-indigo-700">
                  교육
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
