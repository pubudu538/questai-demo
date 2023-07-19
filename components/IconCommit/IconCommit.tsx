/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import { IconCommitProps } from 'types';

const IconCommit1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `16px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Union: any = styled('img')({
  height: `15px`,
  width: `8px`,
  position: `absolute`,
  left: `12px`,
  top: `16px`,
});

function IconCommit(props: IconCommitProps): JSX.Element {
  return (
    <IconCommit1 className={props.className}>
      <Union
        src={`assets/images/IconCommit_Union.png`}
        loading="lazy"
        alt={'Union'}
      />
    </IconCommit1>
  );
}

export default IconCommit;
