"use client";

import SplitText from "./SplitText";

interface AnimatedHeadingProps {
  text: string;
  tag?: "h1" | "h2" | "h3";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  textAlign?: "left" | "center" | "right";
}

export function AnimatedHeading({
  text,
  tag = "h2",
  className = "",
  style,
  delay = 22,
  textAlign = "left",
}: AnimatedHeadingProps) {
  return (
    <SplitText
      text={text}
      tag={tag}
      className={className}
      style={style}
      delay={delay}
      duration={0.65}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-40px"
      textAlign={textAlign}
    />
  );
}
