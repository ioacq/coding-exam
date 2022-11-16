import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import { useRecoilState } from 'recoil';
import { appState } from '../atoms';

export default function Card2() {
  const [data, setData] = useRecoilState(appState);

  const url = 'https://picsum.photos';

  const getImage = async () => {
    // Add 'simulate-failure' in the URL to intentionally make it fail 
    const res = await fetch(`${url + (data.img.hasError ? '' : 'simulate-failure')}/360/160`)
        .catch(error => setData({...data, img: {src: null, hasError: true}}));
    if (res) {
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setData({...data, img: {src: imageObjectURL, hasError: false}});
    }
  }

  return (
    <button onClick={getImage} type="button" className="button-card">
        <Card sx={{ minWidth: 360, minHeight: 225 }} className={data.img.hasError ? 'background-red' : 'test'}>
            <CardContent>
                <Typography variant="body1">
                Click me to load a random image
                </Typography>
            </CardContent>
            {data.img.src && (
                <CardMedia
                    component="img"
                    height="160"
                    src={data.img.src}
                    alt="green iguana"/>
            )}
        </Card>
    </button>
  );
}
