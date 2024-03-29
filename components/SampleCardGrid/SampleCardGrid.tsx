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
import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import SampleCard from 'components/SampleCard/SampleCard';
import { SampleCardGridProps } from 'types';
import useSampleCardGrid from 'components/SampleCardGrid/useSampleCardGrid';

const SampleCardGrid1: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
});

const Grid: any = styled('div')({
  display: `grid`,
  position: `relative`,
  isolation: `isolate`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
  height: `auto`,
  gridTemplateColumns: `repeat(auto-fit, minmax(453.33px, 1fr))`,
  columnGap: `30px`,
  rowGap: `30px`,
  width: `100%`,
});

const SampleCard1: any = styled(SampleCard)(({ theme }: any) => ({
  flex: `1`,
  margin: `0px`,
}));

function SampleCardGrid(props: SampleCardGridProps): JSX.Element {
  const { data } = useSampleCardGrid();

  return (
    <SampleCardGrid1 className={props.className}>
      <Tooltip arrow={true} placement={'top'} title={'fdsafsa'}>
        <Grid>
          {data.items &&
            data.items.map((item: any, index: number) => {
              return <SampleCard1 key={index} />;
            })}
        </Grid>
      </Tooltip>
    </SampleCardGrid1>
  );
}

export default SampleCardGrid;
