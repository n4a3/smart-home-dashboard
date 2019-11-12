import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SimpleLogo } from '../../assets/simple-logo.svg';
import { ReactComponent as PlayIcon } from '../../assets/play.svg';
import { ReactComponent as ConnectionIcon } from '../../assets/connection.svg';
import Button from '../../components/Button';
import Container from '../../components/Container';
import TextInput from '../../components/TextInput';
import { InputTypes } from '../../types';
import { ButtonSkins } from '../../types/ButtonSkins';
import {
  Heading,
  LeftSide,
  RightContentWrapper,
  RightSide,
  Slogan,
  Wrapper,
  InlineRelativeWrapper,
  LetterCircle,
  LeftContentWrapper
} from './Auth.styles';
import Link from '../../components/Link';
import { LinkSkins } from '../../types/LinkSkins';
import { RouteComponentProps } from 'react-router';

@observer
class Auth extends Component<RouteComponentProps> {
  @observable
  private email = '';
  @observable
  private password = '';
  @observable
  private passwordAgain = '';
  @observable
  private fullName = '';

  public render() {
    const { search } = this.props.location;
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
            <Button
              skin={ButtonSkins.CIRCLE}
              onClick={() => console.log('test')}
            >
              <PlayIcon />
            </Button>
          </LeftContentWrapper>
        </LeftSide>
        <RightSide>
          <RightContentWrapper>
            <SimpleLogo style={{ alignSelf: 'center' }} />
            <Container marginTop={60} />
            <Heading>Sign in</Heading>
            <Container marginTop={42} />
            <TextInput
              value={this.email}
              onChange={this.onEmailChange}
              type={InputTypes.EMAIL}
              width="100%"
              label="Email"
            />
            <Container marginTop={24} />
            <TextInput
              value={this.password}
              onChange={this.onPasswordChange}
              type={InputTypes.PASSWORD}
              width="100%"
              label="Password"
            />
            <Container marginTop={24} />
            <Button onClick={this.onSingIn}>Sign In</Button>
            {search === '' && (
              <Container marginTop={72} marginLeft="auto" marginRight="auto">
                <Link to="?restore" skin={LinkSkins.SECONDARY}>
                  Forgot your password?
                </Link>
              </Container>
            )}
            <Container marginTop={212} marginLeft="auto" marginRight="auto">
              <Link to="?register">Don’t have an account? Sign up</Link>
            </Container>
          </RightContentWrapper>
        </RightSide>
      </Wrapper>
    );
  }

  private onEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.email = event.currentTarget.value;
  };

  private onPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.password = event.currentTarget.value;
  };

  private onSingIn = () => {
    if (this.email && this.password) {
      console.log('test');
    }
  };
}

export default Auth;
