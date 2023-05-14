import styled from "styled-components";

interface RoundedImgProps {
  width: number;
  height: number;
  src: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const RoundedImg = ({ width, height, src, onClick, ...restProps }: RoundedImgProps) => {
  return (
    <Conatainer width={width} height={height} onClick={onClick} {...restProps}>
      <img src={src} />
    </Conatainer>
  );
};

const Conatainer = styled.div<Omit<RoundedImgProps, "src">>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default RoundedImg;
