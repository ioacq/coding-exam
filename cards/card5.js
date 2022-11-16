import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useRecoilState } from 'recoil';
import { appState } from '../atoms';

export default function Card5() {
    const [data, setData] = useRecoilState(appState);

    return (
        <button onClick={data.increment} type="button" className="button-card" disabled={!data.img.hasError}>
            <Card sx={{ minWidth: 360, minHeight: 225 }}>
                <CardContent>
                    <Typography variant="body1">
                        This button only activates if you<br/>
                        get an error from loading an image<br/>
                        {data.counter}
                    </Typography>
                </CardContent>
            </Card>
        </button>
    );
}
