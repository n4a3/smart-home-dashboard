import styled from 'styled-components';
import posed from 'react-pose';

interface IWrapperProps {
  areas: string[];
}

const PosedWrapper = posed.div({
  enter: { opacity: 1, scale: 1, transition: { duration: 200 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 600 } },
  preEnter: { opacity: 0, scale: 1.2 }
});

export const Wrapper = styled(PosedWrapper)<IWrapperProps>`
  display: grid;
  flex-grow: 1;
  grid-template-rows: repeat(3, minmax(208px, 1fr));
  grid-template-columns: repeat(5, minmax(208px, 1fr));
  grid-gap: 10px;
  grid-template-areas: ${({ areas }) => areas};
  transition: 1s;
`;
