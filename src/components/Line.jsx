import React from "react";

// const positions = {
//   left: "flex justify-start",
//   center: "flex justify-center",
//   right: "flex justify-end",
// };

function Line({ tittle }) {
  return (
    <div className="borderw-screen h-4/4 flex justify-end py-6">
      <div className="flex   w-2/6 h-2/3 items-baseline justify-end">
        <div className="mx-10 font-bold tracking-[14px] text-pink-600">
          {tittle}
        </div>
        <hr className="my-4  w-80 h-1 bg-pink-600 rounded border-0 " />
      </div>
    </div>
  );
}

export default Line;
