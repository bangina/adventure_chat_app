import RoomPreviewCard from "@/components/molecules/RoomPreviewCard";
import { getRoomList } from "@/services/apis/room";
import { RoomResponseType } from "@/types/message";
import { formatHHMM } from "@/utils/formatHHMM";
import RoomListNavBar from "feature/components/pages/list/RoomListNavBar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

function RoomListPage() {
  const [roomList, setRoomList] = useState<RoomResponseType[]>([]);
  const getRoomListData = async () => {
    const response = await getRoomList();
    setRoomList(response);
  }
  const router = useRouter();
  const handleClickRoomCard = (roomId: number | string) => router.push(`/room/${roomId}`);

  useEffect(() => {
    getRoomListData()
  }, []);

  return (
    <div>
      <Head>
        <title>Message App</title>
        <meta name='description' content='Message App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <RoomListNavBar title={"채팅"} />

      <main>
        {roomList?.map((room) => (
          <RoomPreviewCard
            src={room.user.avatar}
            unread_count={room.unread_count}
            user_name={room.user.name}
            last_message={room.messages[0].text}
            time={formatHHMM(room.messages[0].sent_at)}
            onClick={() => handleClickRoomCard(room.id)}
            key={room.id+ 'roomPreviewCard'}
          />
        ))}
      </main>
    </div>
  );
}

type Data = {
  roomListData: RoomResponseType[];
};


export default RoomListPage;
