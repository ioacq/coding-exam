import * as React from 'react';

import { useRecoilValue } from 'recoil';
import { appState } from './atoms';

import Card5 from './cards/card5';
import Card6 from './cards/card6';

export default function Fieldset() {
  const data = useRecoilValue(appState);

  return (
    <fieldset disabled={!data.phraseMatched}>
      <Card5></Card5>

      <Card6></Card6>
    </fieldset>
  );
}
