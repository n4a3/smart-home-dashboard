import styled from 'styled-components';
import posed from 'react-pose';

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

export const PageWrapper = styled.div`
  width: 100%;
  margin: 0 58px;
`;

export const RouteContainer = posed.div({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 }
});

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 200;
`;

export const PageExtras = styled.div``;
