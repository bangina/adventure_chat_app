import styled from "styled-components";

function DateDivider({ display_date }: { display_date: string }) {
  return (
    <DateDividerWrapper>
      <Divider />
      <DateDividerText>{display_date}</DateDividerText>
      <Divider />
    </DateDividerWrapper>
  );
}

const DateDividerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.paleLilac};
`;

const DateDividerText = styled.div`
  padding: 0;
  opacity: 0.4;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.charcoalGreyTwo};
  width: 100%;
  text-align: center;
`;
export default DateDivider;
