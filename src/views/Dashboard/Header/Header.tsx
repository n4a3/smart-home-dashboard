import React, { Component } from 'react';
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
import { rootStore } from '../../../stores/RootStore';
import { IApplicationState } from '../../../store/types';
import { connect } from 'react-redux';
import { getIsModalOpened } from '../../../store/meta/selectors';
import { Modals } from '../../../store/meta/types';

const mapStateToProps = (state: IApplicationState) => {
  const { openedModals, ...other } = state.meta;
  return {
    ...other,
    isModalOpened: (modal: Modals) => getIsModalOpened(state, modal)
  };
};

type TStateProps = ReturnType<typeof mapStateToProps>;

type IAuthProps = TStateProps;

const Header: React.FC<IAuthProps> = () => (
  <HeaderWrapper>
    <HeaderSection>
      <Link to="?" style={{ position: 'relative', top: -8 }}>
        <Logo />
      </Link>
      <ButtonMenuWrapper>
        <Button
          skin={ButtonSkins.ICON}
          onClick={rootStore.dashboardStore.toggleNav}
        >
          <Menu />
        </Button>
      </ButtonMenuWrapper>
    </HeaderSection>
    <HeaderSection>
      <Progress percent={60} icon={Storage} />
      <Container marginRight={56} />
      <Dropdown skin={DropdownSkins.FLAT} renderBody={() => 'Empty'}>
        <Help />
      </Dropdown>
      <Dropdown skin={DropdownSkins.FLAT} renderBody={() => 'Empty'}>
        <Email />
      </Dropdown>
      <Dropdown
        skin={DropdownSkins.FLAT}
        bodyWidth={272}
        renderBody={() => 'Empty'}
      >
        <Notification />
      </Dropdown>
      <Dropdown
        headerWidth={140}
        renderBody={(onClose: () => void) => (
          <Button
            skin={ButtonSkins.TRANSPARENT}
            width="100%"
            onClick={rootStore.authStore.logout}
            onBlur={onClose}
          >
            Sign Out
          </Button>
        )}
      >
        {rootStore.authStore.name}
      </Dropdown>
    </HeaderSection>
  </HeaderWrapper>
);

export default connect(mapStateToProps)(Header);
