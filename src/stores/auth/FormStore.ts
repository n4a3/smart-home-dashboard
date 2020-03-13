import { observable, action } from 'mobx';
import { AuthStore } from './AuthStore';
import { ITextInputProps } from '../../components/TextInput/TextInput';

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

export class FormStore {
  readonly authStore: AuthStore;

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

  @action
  private onEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.email = event.currentTarget.value;
    this.passwordError = null;
    console.dir(this);
  };

  @action
  private onPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.password = event.currentTarget.value;
    this.passwordError = null;
  };

  @action
  private onPasswordConfirmChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    this.passwordConfirm = event.currentTarget.value;
    this.passwordConfirmError = this.passwordConfirm.length
      ? this.passwordConfirm !== this.password
      : null;
    this.passwordError = null;
  };

  @action
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

  @action
  private onSignIn = async () => {
    if (this.emailError === false && this.password && !this.passwordError) {
      const status = await this.authStore.login(this.email, this.password);
      if (status === null) {
        return;
      }
      this.passwordError = !status;
    }
  };

  @action
  private onSignUp = () => {
    if (
      this.emailError === false &&
      this.passwordConfirmError === false &&
      this.fullName
    ) {
      this.authStore.register(this.email, this.password, this.fullName);
    }
  };

  constructor(authStore: AuthStore) {
    this.authStore = authStore;
  }

  getForm = (searchUrl: string): IRouteProps => {
    switch (searchUrl) {
      case '?register':
        return this.registerForm;
      case '?restore':
        return this.restoreForm;
      default:
        return this.loginForm;
    }
  };

  @action
  clear = () => {
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
    this.fullName = '';
    this.emailError = null;
    this.passwordError = null;
    this.passwordConfirmError = null;
  };
}
