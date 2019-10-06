import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const Ascii = styled.pre`
  color: white;
  font-family: 'MS PGothic', 'Trebuchet MS', Verdana, Futura, Arial, Helvetica,
    sans-serif;
`;

const asciiArt = `  　　　　　　　　　　　　　　 　 ､＿
  　　　　　　　　　　 　 　 　 　 ) o )
  　　　　　　　　　　　　　　　　(　　ゝ
  　　　　　　　　　　　　　-　 ￣￣￣　‐ ､
  　　　　　　　　､＿- ´　　　 ﾊ　　　　　　ヽ∧
  　　 　 　 　 　 　 ／　　 / / i ﾊ ヽ　　　　　 ヽ
  　　　　 　 　 　 /　 　⌒l/　 V⌒ヽヽ　　　　ヽ｀
  　　 　 　 　 　 /ｨ　 //'r=ﾐ 　 　 r;=ﾐ　V　　　ヽ
  　　　　　　　　　{　　i { {//}　 　 {//} } /　/　　ヽ
  　　　 　 　 　 　 Vﾊ'l,,, ヾ-'　　　ヾ‐' /　/}　　　ヽ
  　　　　　　　　 　 / ,′　　　　 -┐''/　/ｲ　　　　ヽ
  　　　　　　 　 　 /　ﾊｰ-､ﾏ´＿_ノ-'/ /＼　　　　　ヽ
  　　　　　　　　　　∨ヽ　 ／l￣l>く // 　/ ｀ ｰ､　　　ヽ
  　　　　　　　　　 　 　 ∨　　＞V:.〈/ ＜　　 ,　 ヽ　　　ヽ
  　　　　　　　　 _,r r､_ /　ヽ　ヽ ヽ:/　 /　　/　　 ヽ　 　 ﾊ
  　　　　　 　 ┌LL{_{_l―――――――‐┐　　　 ヽ　　　}
  　　　　　　　 |　　　　　　　　　　　　　⊂二ヽ＿　　 ヽ　 ハ
  　　　　　　　 |　　　　　　　　　　　　 ´ニ=　 }　 }｀ｰ　ヽ　}
  　　　　　　　 |　　It's Dropdown   　 とﾆ､　}　 }　　　 ∨
  　　　　　　　 |　　　　　 　 　 　 　 　 　 　 ||ｿ 　}　　　 /
  　　　　　　　 |　　　　　 　 　 　 　 　 　 　 ||ｰ‐┴---イ
  　　　　　　　 |　　　　　 　 　 　 　 　 　 　 |　　　　　　 }
  　　　　　 　 └―――――‐┬―――‐┘　　　　　　}
  　　　　　　　　　　　　　　　　 /　 　 　 　 　 　 　 　 　 }
  　　　　　　　　　　　　　　　　/　　　　　　　 　 　 　 　 ,′
  　　　　　　　　　　　　　　　 /　　　　　　　　　　　　　 /`;

const renderBody = () => <Ascii>{asciiArt}</Ascii>;

storiesOf('Components|Dropdown', module).add('Default', () => {
  return (
    <Dropdown label="Dropdown" renderBody={renderBody}>
      Please click me
    </Dropdown>
  );
});
