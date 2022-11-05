import { useState, useEffect } from "react";

// To detect if a section is visible in the viewport for more than 3 seconds
const useIntersection = (element, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let currentElement, timer;

    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (timer && !isIntersecting) clearTimeout(timer);

        timer = setTimeout(() => {
          setIsVisible(isIntersecting);
        }, 3000);
      },
      { rootMargin }
    );

    if (element?.current) {
      currentElement = element.current;
      observer.observe(currentElement);
    }

    return () => {
      clearTimeout(timer);
      observer.unobserve(currentElement);
    };
  }, [element, rootMargin]);

  return isVisible;
};

export default useIntersection;
