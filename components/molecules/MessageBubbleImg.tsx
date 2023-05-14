import RoundedImg from "@/components/atoms/RoundedImg";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
interface MessageBubbleImgProps {
  image_url: string;
}

const IMG_SMALL_SIZE = 120;
const IMG_LARGE_SIZE = 200;

function MessageBubbleImg({ image_url }: MessageBubbleImgProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const isUploadComplete = progress === 100;

  return (
    <Wrapper>
      <RoundedImgWrapper width={isUploadComplete ? IMG_LARGE_SIZE : IMG_SMALL_SIZE} height={isUploadComplete ? IMG_LARGE_SIZE : IMG_SMALL_SIZE} src={image_url} />
      <ProgressBarWrapper>
        <ProgressBar progress={progress} />
      </ProgressBarWrapper>
    </Wrapper>
  );
}

export default MessageBubbleImg;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 6px;
  width: ${IMG_LARGE_SIZE}px;
  height: ${IMG_LARGE_SIZE}px;
  position: relative;
`;
const RoundedImgWrapper = styled(RoundedImg)`
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  transition: width 0.3s ease-in;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const ProgressBarWrapper = styled.div`
  height: 6px;
  width: ${IMG_SMALL_SIZE}px;
  background-color: ${(props) => props.theme.colors.paleGrey};
  border-radius: 3px;
  position: absolute;
  right: 0;
  bottom: -12px;
  overflow: hidden;
  margin-top: 6px;
`;
const ProgressBar = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  visibility: ${(props) => (props.progress === 100 ? "hidden" : "visible")};
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  transition: width 0.05s ease-in;
`;
