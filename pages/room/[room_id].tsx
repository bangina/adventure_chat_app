import { getRoomDetail } from "@/services/apis/room";
import { RoomResponseType, UserResponseType } from "@/types/message";
import useRecoilMessageList from "libs/recoil_atoms/messageList/useRecoilMessageList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import MessageListSection from "../../feature/components/pages/room_id/MessageListSection";
import RoomDetailNavBar from "../../feature/components/pages/room_id/RoomDetailNavBar";
import Head from "next/head";
import { getUserDetail } from "@/services/apis/user";

function RoomDetailPage({ userData, roomData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { updateMessage } = useRecoilMessageList();
  useEffect(() => {
    updateMessage(roomData.messages);
  }, []);

  return (
    <div>
      <Head>
        <title>{userData?.name}</title>
        <meta name='description' content='Message App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RoomDetailNavBar title={userData?.name} />
      <MessageListSection />
    </div>
  );
}

type Data = {
  userData: UserResponseType;
  roomData: RoomResponseType;
};

export const getServerSideProps: GetServerSideProps<Data> = async (context) => {
  const { room_id } = context.params;
  const roomData = await getRoomDetail(String(room_id));
  const user_id = roomData?.id;
  const userData = await getUserDetail(user_id);
  if (!roomData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userData,
      roomData,
    },
  };
};

export default RoomDetailPage;
