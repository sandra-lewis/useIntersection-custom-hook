import { useEffect, useRef } from "react";
import useIntersection from "./customHook/useIntersection";
import "./styles.css";

export default function App() {
  const sectionFourRef = useRef(null);
  const sectionIsInViewport = useIntersection(sectionFourRef);

  useEffect(() => {
    if (sectionIsInViewport && sectionFourRef?.current) {
      const sectionText = sectionFourRef.current.textContent;
      window.alert(`${sectionText} is visible in the viewport!`);
    }
  }, [sectionIsInViewport]);

  return (
    <>
      <header>Header</header>
      <section>Section-1</section>
      <section>Section-2</section>
      <section>Section-3</section>
      <section ref={sectionFourRef}>Section-4</section>
      <section>Section-5</section>
      <footer>Footer</footer>
    </>
  );
}
