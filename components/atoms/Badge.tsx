import styled from "styled-components";

export interface BadgeProps {
  text: string | number;
}
export default function Badge({ text }: BadgeProps) {
  return <Container>{text}</Container>;
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;
  font-weight: 700;
`;
