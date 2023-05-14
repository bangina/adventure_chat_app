import styled from "styled-components";

const TextS3 = styled.p`
  font-size: 17px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.1px;
  color: ${(props) => props.color};
`;

const TextS4 = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.2px;
  color: ${(props) => props.color};
`;

const TextS2 = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.1px;
  color: ${(props) => props.color};
`;

const TextS1 = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.1px;
  text-align: right;
  font-weight: 600;
  color: ${(props) => props.color};
`;

export { TextS3, TextS4, TextS2, TextS1 };
