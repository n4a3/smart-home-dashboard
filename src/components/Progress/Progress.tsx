import React from 'react';
import { ProgressStyled, Wrapper, IconWrapper } from './Progress.styles';

interface IProgressProps {
  percent: number;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Progress: React.FC<IProgressProps> = ({ icon: Icon, percent }) => {
  return (
    <Wrapper>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      <ProgressStyled percent={percent} />
    </Wrapper>
  );
};

export default Progress;
