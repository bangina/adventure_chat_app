import styled from "styled-components";

interface AppBarProps {
  children: React.ReactNode;
}
export default function AppBar({ children }: AppBarProps) {
  return <TopNavBar>{children}</TopNavBar>;
}
const TopNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 28px 12px 12px;
  background-color: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;  
`;
