import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

function HomePage() {
  return (
    <Container>
      <Head>
        <title>Message App Homepage</title>
        <meta name='description' content='Message App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Link href={"/list"}>
        <Button>채팅 리스트 페이지 가기</Button>
      </Link>
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  height: 56px;
  padding: 8px 16px;
`;
