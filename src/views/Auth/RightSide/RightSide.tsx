import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { PoseGroup } from 'react-pose';
import { ReactComponent as SimpleLogo } from '../../../assets/simple-logo.svg';
import Alert from '../../../components/Alert';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Link from '../../../components/Link';
import Loader from '../../../components/Loader';
import TextInput from '../../../components/TextInput/TextInput';
import { rootStore } from '../../../stores/RootStore';
import { AlertSkins, LinkSkins } from '../../../types';
import {
  BottomWrapper,
  ContentWrapper,
  FormWrapper,
  Heading,
  PosedFormInput,
  RightSideWrapper,
  TopWrapper
} from './RightSide.styles';

interface IRightSideProps {
  searchUrl: string;
}

@observer
class RightSide extends Component<IRightSideProps> {
  private get authStore() {
    return rootStore.authStore;
  }

  private get form() {
    return this.authStore.formStore?.getForm(this.props.searchUrl);
  }

  private get heading(): string {
    switch (this.props.searchUrl) {
      case '?register':
        return 'Sign Up';
      case '?restore':
        return 'Restore Password';
      default:
        return 'Sign In';
    }
  }

  private get bottomLink(): React.ReactElement {
    switch (this.props.searchUrl) {
      case '?register':
        return <Link to="?">Already have an account? Login</Link>;
      default:
        return <Link to="?register">Don’t have an account? Sign up</Link>;
    }
  }

  componentWillUnmount() {
    this.authStore.formStore.clear();
  }

  render() {
    return (
      <RightSideWrapper>
        <ContentWrapper>
          <TopWrapper>
            <SimpleLogo style={{ alignSelf: 'center' }} />
            <Heading>{this.heading}</Heading>
          </TopWrapper>
          <FormWrapper onSubmit={this.onFormSubmit}>
            <PoseGroup>
              {this.form && [
                ...this.form.fields.map(({ key, props }, index) => (
                  <PosedFormInput key={key} index={index}>
                    <Container marginBottom={24}>
                      <TextInput width="100%" {...props} />
                    </Container>
                  </PosedFormInput>
                )),
                <PosedFormInput
                  key={this.form.button.key}
                  index={this.form.fields.length}
                >
                  <Button
                    width="100%"
                    onClick={this.form.button.onClick}
                    disabled={this.authStore.loading}
                  >
                    {this.authStore.loading ? (
                      <Loader />
                    ) : (
                      this.form.button.text
                    )}
                  </Button>
                </PosedFormInput>,
                <PosedFormInput key="alert">
                  {this.authStore.error && (
                    <Container marginTop={24}>
                      <Alert skin={AlertSkins.ERROR}>
                        {this.authStore.error}
                      </Alert>
                    </Container>
                  )}
                </PosedFormInput>
              ]}
            </PoseGroup>

            {this.props.searchUrl === '' && (
              <Container marginTop={72} marginLeft="auto" marginRight="auto">
                <Link to="?restore" skin={LinkSkins.SECONDARY}>
                  Forgot your password?
                </Link>
              </Container>
            )}
          </FormWrapper>
          <BottomWrapper>{this.bottomLink}</BottomWrapper>
        </ContentWrapper>
      </RightSideWrapper>
    );
  }

  private onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
}

export default RightSide;
