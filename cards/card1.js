import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useRecoilState } from 'recoil';
import { appState } from '../atoms';

export default function Card1() {
  const [data, setData] = useRecoilState(appState);

  const getData = () => {
    fetch("http://localhost:3000/api/card1")
      .then(res => res.json())
      .then(json => setData({...data, json: json}));
  }

  return (
    <button onClick={getData} type="button" className="button-card">
      <Card sx={{ minWidth: 359, maxWidth: 360, minHeight: 225 }}>
        <CardContent>
            <Typography variant="body1">
                Click me to load a json string
            </Typography>
            <br/>
            {data.json && (<code>{JSON.stringify(data.json)}</code>)}
        </CardContent>
      </Card>
    </button>
  );
}
