import styled from 'styled-components';
import posed from 'react-pose';

export const RightSideWrapper = styled.div`
  padding: 55px;
  padding-top: 130px;
  padding-bottom: 45px;
  display: flex;
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const TopWrapper = styled.div`
  text-align: center;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 42px;
`;
export const BottomWrapper = styled.div`
  align-self: center;
`;

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

export const PosedFormInput = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ index }: { index: number }) => 40 * index,
    transition: {
      y: {
        type: 'spring',
        damping: 12
      }
    }
  },
  exit: {
    opacity: 0,
    y: -25
  }
});
