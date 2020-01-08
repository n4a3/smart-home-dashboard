import styled, { keyframes } from 'styled-components';

const dotAnimations = [
  keyframes`0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }`,
  keyframes`0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }`,
  keyframes`0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }`
];

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 10px;
`;

export const Dot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffffff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: ${dotAnimations[0]} 0.6s infinite;
  }
  &:nth-child(2) {
    left: 8px;
    animation: ${dotAnimations[1]} 0.6s infinite;
  }
  &:nth-child(3) {
    left: 32px;
    animation: ${dotAnimations[1]} 0.6s infinite;
  }
  &:nth-child(4) {
    left: 56px;
    animation: ${dotAnimations[2]} 0.6s infinite;
  }
`;
