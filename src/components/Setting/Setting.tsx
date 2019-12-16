import React from 'react';
import {
  Wrapper,
  Title,
  Description,
  Switcher,
  LineWrapper
} from './Setting.styles';

interface ISettingProps {
  children: any;
  title: string;
  description?: string;
}

const Setting: React.FC<ISettingProps> = ({ title, description, children }) => {
  return (
    <Wrapper hasDescription={!!description}>
      <Title>{title}</Title>
      <LineWrapper hasDescription={!!description}>
        {description && <Description>{description}</Description>}
        <Switcher>{children}</Switcher>
      </LineWrapper>
    </Wrapper>
  );
};

export default Setting;
