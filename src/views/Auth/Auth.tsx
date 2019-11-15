import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ReactComponent as ConnectionIcon } from '../../assets/connection.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as PlayIcon } from '../../assets/play.svg';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { ButtonSkins } from '../../types/ButtonSkins';
import {
  InlineRelativeWrapper,
  LeftContentWrapper,
  LeftSide,
  LetterCircle,
  Slogan,
  Wrapper
} from './Auth.styles';
import RightSide from './RightSide';
import Link from '../../components/Link';

const Auth: React.FC<RouteComponentProps> = ({ location: { search } }) => {
  return (
    <Wrapper>
      <LeftSide>
        <LeftContentWrapper>
          <Logo />
          <Container>
            <Slogan weight={300}>Control your home</Slogan>
            <Slogan weight={500}>
              Connect your lif
              <InlineRelativeWrapper>
                e
                <LetterCircle />
                <ConnectionIcon
                  style={{
                    position: 'absolute',
                    top: '3px',
                    right: '-16px'
                  }}
                />
              </InlineRelativeWrapper>
            </Slogan>
          </Container>
          <Link
            to="https://n4a3.github.io/smart-home-storybook/"
            target="_blank"
          >
            <Button skin={ButtonSkins.CIRCLE}>
              <PlayIcon />
            </Button>
            <Container marginRight={8} />
            Check the Storybook!
          </Link>
        </LeftContentWrapper>
      </LeftSide>
      <RightSide searchUrl={search} />
    </Wrapper>
  );
};

export default Auth;
