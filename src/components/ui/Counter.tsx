"use client";
import CountUp from "react-countup";
type TCounter = {
  count: number;
};
const Counter = ({ count }: TCounter) => {
  return (
    <CountUp
      className=""
      start={0}
      end={count}
      duration={5}
      delay={1}
    ></CountUp>
  );
};

export default Counter;
