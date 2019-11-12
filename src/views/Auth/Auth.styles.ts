import styled from 'styled-components';
import bg from '../../assets/bg.jpg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #242e42;
  display: flex;
`;

// ------------------Left side------------------

export const LeftSide = styled.div`
  position: relative;
  flex: 0.7;
  padding: 55px;
  box-shadow: 0 6px 13px rgba(21, 33, 56, 0.53);
  &::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.1;
  }
`;

export const LeftContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Slogan = styled.p<{ weight: number }>`
  font-size: 50px;
  font-weight: ${({ weight }) => weight};
  margin: 0;
`;

export const InlineRelativeWrapper = styled.span`
  display: inline-block;
  position: relative;
`;

export const LetterCircle = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #354158;
  top: 23px;
  right: 3px;
`;

// ------------------Right side------------------

export const RightSide = styled.div`
  padding: 55px;
  display: flex;
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;

export const RightContentWrapper = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;
