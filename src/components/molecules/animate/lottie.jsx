import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Lottie({url, ...props}) {
  const animRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: url
    });

    return () => anim.destroy();
  }, []);

  return <div ref={animRef} {...props}/>;
}
