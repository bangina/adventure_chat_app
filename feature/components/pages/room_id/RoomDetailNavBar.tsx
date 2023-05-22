import { TextS3 } from "@/assets/css/sharedStyles";
import { theme } from "@/assets/css/theme";
import InvertedIcon from "@/components/atoms/InvertedIcon";
import { IC_IMG_BACK, IC_IMG_UPLOAD } from "@/data/constants/icons";
import { SAVED_IMAGES } from "@/data/constants/saved_images";
import { MessageTypeEnum } from "@/types/message";
import createMotionVariants from "@/utils/createMotionVariants";
import { motion } from "framer-motion";
import useRecoilMessageList from "@/libs/recoil_atoms/messageList/useRecoilMessageList";
import { useRouter } from "next/router";
import { useId, useState } from "react";
import styled from "styled-components";
import RoundedImg from "@/components/atoms/RoundedImg";
import TopNavBar from "@/components/organisms/layout/TopNavBar";

interface RoomDetailNavBarProps {
  title: string;
}
interface ImgObj {
  url: string;
  is_selected: boolean;
}

interface ImageListContainerProps {
  showImageList: boolean;
}

export default function RoomDetailNavBar({ title }: RoomDetailNavBarProps) {
  const router = useRouter();
  const randomId = useId();
  const { updateMessage } = useRecoilMessageList();

  const [imageList, setImageList] = useState<ImgObj[]>(
    Array.from(SAVED_IMAGES).map((imgUrl) => {
      return { url: imgUrl, is_selected: false };
    })
  );
  const [showImageList, setShowImageList] = useState<boolean>(true);
  const handleClickBackBtn = () => router.back();
  const handleClickImageUploadBtn = () => setShowImageList((prev) => !prev);

  const handleSelectImage = (img: ImgObj) => () => {
    const messageDataObj = {
      success: true,
      data: {
        id: randomId,
        sender_id: "finn",
        sent_at: new Date().toISOString(),
        type: MessageTypeEnum.IMAGE,
        image_url: img.url,
      },
    };
    updateMessage((prevMessageList) => [...prevMessageList, messageDataObj.data]);
    setImageList((prevList) => prevList.map((image) => (image.url === img.url ? { ...image, is_selected: true } : image)));
  };
  const variants = createMotionVariants({
    duration: 0.5,
    initialDirection: "in",
  });

  const animationCommonProps = {
    key: router.route,
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: variants,
  };

  return (
    <>
      <TopNavBar>
        {showImageList ? (
          <BackButton {...animationCommonProps}>
            <InvertedIcon src={IC_IMG_BACK} alt='go to prev page' width={24} height={24} onClick={handleClickBackBtn} />
          </BackButton>
        ) : (
          <div css={{ width: "66px", textAlign: "left" }} />
        )}
        <TextS3 color={theme.colors.white} css={{ flex: 1, textAlign: "center" }}>
          {title}
        </TextS3>
        <div css={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconButton onClick={handleClickImageUploadBtn} {...animationCommonProps}>
            <InvertedIcon src={IC_IMG_UPLOAD} alt='upload image' width={24} height={24} />
          </IconButton>
        </div>
      </TopNavBar>

      <ImageListContainer showImageList={showImageList}>
        {imageList.map((imgItem, index) => (
          <RoundImgWithAnim isSelected={imgItem.is_selected} key={`saved_image_${index}`} width={46} height={46} src={imgItem.url} onClick={handleSelectImage(imgItem)} />
        ))}
      </ImageListContainer>
    </>
  );
}

const ANIM_DURATION = 0.3;
const IMG_SIZE = 46;

const ImageListContainer = styled.div<ImageListContainerProps>`
  background-color: ${(props) => props.theme.colors.primary};
  transition: ${ANIM_DURATION}s ease-out;
  height: ${(props) => (props.showImageList ? "0px" : "68px")};
  padding: 0px 11px;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  scrollbar-width: none;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  img {
    transition: ${ANIM_DURATION}s ease-in-out;
    opacity: ${(props) => (props.showImageList ? "0" : "100%")};
    height: ${(props) => (props.showImageList ? "0px" : IMG_SIZE)};
    width: ${(props) => (props.showImageList ? "0px" : IMG_SIZE)};
  }
`;

const BackButton = styled(motion.button)`
  width: 66px;
  text-align: left;
`;

const IconButton = styled(motion.button)`
  margin-left: 16px;
`;

const RoundImgWithAnim = styled(RoundedImg)<{ isSelected: boolean }>`
  opacity: ${(props) => (props.isSelected ? "0" : "100%")};
  height: ${(props) => (props.isSelected ? "0" : IMG_SIZE)};
  width: ${(props) => (props.isSelected ? "0" : IMG_SIZE)};
  margin-right: ${(props) => (props.isSelected ? "0" : "10px")};
  transition: ${ANIM_DURATION}s ease-in;
`;
