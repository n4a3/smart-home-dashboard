import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { PoseGroup } from 'react-pose';
import { ReactComponent as SimpleLogo } from '../../../assets/simple-logo.svg';
import Alert from '../../../components/Alert';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Link from '../../../components/Link';
import Loader from '../../../components/Loader';
import TextInput, {
  ITextInputProps
} from '../../../components/TextInput/TextInput';
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

interface IRouteProps {
  fields: {
    key: string;
    props: ITextInputProps;
  }[];
  button: {
    key: string;
    text: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
}

@observer
class RightSide extends Component<IRightSideProps> {
  @observable
  private email = '';
  @observable
  private password = '';
  @observable
  private passwordConfirm = '';
  @observable
  private fullName = '';

  @observable
  private emailError: boolean | null = null;
  @observable
  private passwordError: boolean | null = null;
  @observable
  private passwordConfirmError: boolean | null = null;

  private get loginForm(): IRouteProps {
    return {
      fields: [
        {
          key: 'f-email',
          props: {
            value: this.email,
            onChange: this.onEmailChange,
            type: 'email',
            label: 'Email',
            hasError: this.emailError,
            onBlur: this.validateEmail
          }
        },
        {
          key: 'f-pass',
          props: {
            value: this.password,
            onChange: this.onPasswordChange,
            type: 'password',
            label: 'Password',
            hasError: this.passwordError
          }
        }
      ],
      button: {
        key: 'f-btn-sign-in',
        text: 'Sign In',
        onClick: this.onSignIn
      }
    };
  }

  private get registerForm(): IRouteProps {
    return {
      fields: [
        ...this.loginForm.fields,
        {
          key: 'f-pass-confirm',
          props: {
            value: this.passwordConfirm,
            onChange: this.onPasswordConfirmChange,
            type: 'password',
            label: 'Password Confirm',
            hasError: this.passwordConfirmError
          }
        },
        {
          key: 'f-name',
          props: {
            value: this.fullName,
            onChange: this.onFullNameChange,
            label: 'Full Name'
          }
        }
      ],
      button: {
        key: 'f-btn-sign-up',
        text: 'Sign Up',
        onClick: this.onSignUp
      }
    };
  }

  private get restoreForm(): IRouteProps {
    return {
      fields: [this.loginForm.fields[0]],
      button: {
        key: 'f-btn-restore',
        text: 'Restore password',
        disabled: true
      }
    };
  }

  private get form(): IRouteProps {
    switch (this.props.searchUrl) {
      case '?register':
        return this.registerForm;
      case '?restore':
        return this.restoreForm;
      default:
        return this.loginForm;
    }
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

  public render() {
    return (
      <RightSideWrapper>
        <ContentWrapper>
          <TopWrapper>
            <SimpleLogo style={{ alignSelf: 'center' }} />
            <Heading>{this.heading}</Heading>
          </TopWrapper>
          <FormWrapper onSubmit={this.onFormSubmit}>
            <PoseGroup>
              {[
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
                    disabled={rootStore.authStore.loading}
                  >
                    {rootStore.authStore.loading ? (
                      <Loader />
                    ) : (
                      this.form.button.text
                    )}
                  </Button>
                </PosedFormInput>,
                <PosedFormInput key="alert">
                  {rootStore.authStore.error && (
                    <Container marginTop={24}>
                      <Alert skin={AlertSkins.ERROR}>
                        {rootStore.authStore.error}
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

  private onEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.email = event.currentTarget.value;
    this.passwordError = null;
  };

  private onPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.password = event.currentTarget.value;
    this.passwordError = null;
  };

  private onPasswordConfirmChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    this.passwordConfirm = event.currentTarget.value;
    this.passwordConfirmError = this.passwordConfirm.length
      ? this.passwordConfirm !== this.password
      : null;
    this.passwordError = null;
  };

  private onFullNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.fullName = event.currentTarget.value;
  };

  private validateEmail = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      value: { length },
      validity: { valid }
    } = event.currentTarget;
    this.emailError = length ? !valid : null;
  };

  private onSignIn = async () => {
    if (this.emailError === false && this.password && !this.passwordError) {
      const status = await rootStore.authStore.login(this.email, this.password);
      if (status === null) {
        return;
      }
      this.passwordError = !status;
    }
  };

  private onSignUp = () => {
    if (
      this.emailError === false &&
      this.passwordConfirmError === false &&
      this.fullName
    ) {
      rootStore.authStore.register(this.email, this.password, this.fullName);
    }
  };

  private onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
}

export default RightSide;
