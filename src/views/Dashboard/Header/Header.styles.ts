import styled from 'styled-components';

const border = '1px solid #20293c';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 66px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${border};
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`;

// ---------------- Header Left ----------------

export const ButtonMenuWrapper = styled.div`
  margin-left: 48px;
  width: 64px;
  border-left: ${border};
  border-right: ${border};
  display: flex;
  justify-content: center;
`;

// ---------------- Header Right ----------------
