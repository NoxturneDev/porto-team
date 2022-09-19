import React from "react";
import Nav from "../../components/Nav";
import Line from "../../components/Line";
function Introduction() {
  return (
    <div className="bg-radial-dark w-full h-screen  border border-red-500">
      <div className="flex-col border w-full h-screen border-yellow-500 ">
        <div className="border  border-blue-500 h-42">
          <Line tittle="INTRODUCTION" />
        </div>
        <div className="w-screen h-[530px] border border-red-500">
          <div className="border h-[530px] border-orange-500 w-3/4 font-bold text-9xl leading-[169px] tracking-[19px] p-6 ml-6">
            <h1 className="text-gray-200 ">
              WE ARE <span className="text-pink-600"> HELLOWEB </span> <br />
              PERSISTENT <br />
              COMPONENTS
            </h1>
          </div>
        </div>
        <div className="flex justify-end  p-2 mr-4 ">
          <h2 className="text-pink-600">INI IMAGE</h2>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
