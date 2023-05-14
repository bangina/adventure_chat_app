import { useEffect, useRef } from "react";

const useScrollMessageBubble = () => {
  const msgBubbleContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollIntoLastMessage = () => {
      if (msgBubbleContainerRef.current) {
        (msgBubbleContainerRef.current.lastChild as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollIntoLastMessage();
  }, []);
  return { msgBubbleContainerRef };
};

export default useScrollMessageBubble;
