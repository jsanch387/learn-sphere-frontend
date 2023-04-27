import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring } from "@react-spring/web";

export const useInViewAnimation = (options: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false);

  // Modify the root property to handle the case where it is a Document
  const root = options.root instanceof Document ? null : options.root;

  const { ref, inView: newInView } = useInView({ ...options, root });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
  });

  useEffect(() => {
    if (newInView && !inView) {
      setInView(true);
    }
  }, [newInView, inView]);

  const refCallback = (node: HTMLElement | null) => {
    if (node) {
      ref(node);
    }
  };

  return { ref: refCallback, inView: fadeIn };
};
