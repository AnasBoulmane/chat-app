import styled from "styled-components";

export const ConversationsList = styled.div<{ length: number }>`
  height: ${({ length }) => `${72 * length}px`};
`;

export const ConversationWrapper = styled.div<{ position: number }>`
  height: 72px;
  transition: none 0s ease 0s;
  z-index: ${({ position }) => position} !important;
  transform: ${({ position }) => `translateY(${72 * position}px)`} !important;
`;
