import React, { memo } from 'react';
import CountUp from "react-countup";
import { counterItems } from "../constants/index.js";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <CounterItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
};

const CounterItem = memo(({ item }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
      <div className="counter-number text-white text-5xl font-bold mb-2">
        <CountUp
          suffix={item.suffix}
          end={item.value}
          duration={2.5}
          useEasing={true}
        />
      </div>
      <div className="text-white text-lg">{item.label}</div>
    </div>
  );
});

CounterItem.displayName = 'CounterItem';

export default AnimatedCounter;
