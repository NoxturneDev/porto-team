import React from "react";
import { Wrapper } from "./layout/Container";
function Line({ children: text }) {
  return (
    <Wrapper customClass="w-screen h-4/4 py-6" align="right">
      <div className="mx-10 font-bold tracking-[14px] text-pink-600">
        {text}
      </div>
      <hr className="my-4  w-80 h-1 bg-pink-600 rounded border-0 " />
    </Wrapper>
  );
}

export default Line;
