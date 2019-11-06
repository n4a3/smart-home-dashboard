import styled from 'styled-components';
import posed from 'react-pose';

const config = {
  duration: 400,
  ease: 'easeOut',
  opacity: {
    duration: 200
  }
};

const PosedOverlay = posed.div({
  enter: {
    opacity: 0.8
  },
  exit: {
    opacity: 0
  }
});

export const PosedChildren = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: config
  },
  exit: {
    y: -25,
    opacity: 0,
    transition: config
  }
});

export const OverlayStyled = styled(PosedOverlay)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0;
  background-color: #242e42;
  z-index: -1;
`;

export const LayerOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background-color: #2f3b52;
  box-shadow: 0 6px 13px rgba(21, 33, 56, 0.53);
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
`;
