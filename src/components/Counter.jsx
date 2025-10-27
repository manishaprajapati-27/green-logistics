import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration = 2, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="text-center">
      <h2 className={`font-bold text-primary ${className}`}>
        {inView ? <CountUp start={0} end={end} duration={duration} /> : 0}K
      </h2>
    </div>
  );
};

export default Counter;
