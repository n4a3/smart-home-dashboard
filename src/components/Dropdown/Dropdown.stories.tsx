import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { ButtonSkins, DropdownSkins } from '../../types';
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

storiesOf('Components|Dropdown', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Dropdown
      label={text('label', 'Dropdown')}
      renderBody={renderBody}
      bodyWidth={text('bodyWidth', 'auto')}
      isRotatable={boolean('isRotatable', true)}
      onOpen={
        boolean('Action on open?', false)
          ? action('Dropdown opened!')
          : undefined
      }
      onClose={
        boolean('Action on close?', false)
          ? action('Dropdown closed!')
          : undefined
      }
    >
      Please click me
    </Dropdown>
  ))
  .add(
    'Flat',
    () => (
      <Dropdown
        skin={DropdownSkins.FLAT}
        flatButtonSkin={select(
          'Button skin',
          {
            Default: ButtonSkins.DEFAULT,
            Badge: ButtonSkins.BADGE,
            Circle: ButtonSkins.CIRCLE,
            Transparent: ButtonSkins.TRANSPARENT
          },
          ButtonSkins.TRANSPARENT
        )}
        renderBody={renderBody}
      >
        Test Dropdown with FLAT skin
      </Dropdown>
    ),
    //@ts-ignore
    { options: { theme: { appContentBg: '#3e4e6c' } } }
  );
