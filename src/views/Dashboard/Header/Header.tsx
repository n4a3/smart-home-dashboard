import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import {
  HeaderWrapper,
  HeaderSection,
  ButtonMenuWrapper
} from './Header.styles';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as Menu } from '../../../assets/menu.svg';
import { ReactComponent as Storage } from '../../../assets/storage.svg';
import { ReactComponent as Help } from '../../../assets/help.svg';
import { ReactComponent as Email } from '../../../assets/email.svg';
import { ReactComponent as Notification } from '../../../assets/notification.svg';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import { ButtonSkins, DropdownSkins } from '../../../types';
import Progress from '../../../components/Progress';
import Container from '../../../components/Container';
import Dropdown from '../../../components/Dropdown';

interface IHeaderProps {}

@observer
class Header extends Component<IHeaderProps> {
  @observable
  private isNavOpened = true;

  public render() {
    return (
      <HeaderWrapper>
        <HeaderSection>
          <Link to="?" style={{ position: 'relative', top: -8 }}>
            <Logo />
          </Link>
          <ButtonMenuWrapper>
            <Button skin={ButtonSkins.ICON} onClick={this.onToggleNav}>
              <Menu />
            </Button>
          </ButtonMenuWrapper>
        </HeaderSection>
        <HeaderSection>
          <Progress percent={60} icon={Storage} />
          <Container marginRight={56} />
          <Dropdown skin={DropdownSkins.FLAT} renderBody={() => 'dsdad'}>
            <Help />
          </Dropdown>
          <Dropdown skin={DropdownSkins.FLAT} renderBody={() => 'asdasdd'}>
            <Email />
          </Dropdown>
          <Dropdown
            skin={DropdownSkins.FLAT}
            bodyWidth={272}
            renderBody={() => 'asdsadad'}
          >
            <Notification />
          </Dropdown>
          <Dropdown renderBody={() => 'aaaa'} headerWidth="auto">
            Username
          </Dropdown>
        </HeaderSection>
      </HeaderWrapper>
    );
  }

  private onToggleNav = () => {
    this.isNavOpened = !this.isNavOpened;
  };
}

export default Header;
