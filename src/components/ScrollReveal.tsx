import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal(props: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: props.threshold ?? 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [props.threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "scroll-reveal-visible" : ""} ${props.className || ""}`}
      style={{ transitionDelay: `${props.delay || 0}ms` }}
    >
      {props.children}
    </div>
  );
}
