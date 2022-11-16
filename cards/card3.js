import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useRecoilState } from 'recoil';
import { appState } from '../atoms';

export default function Card3() {
    const [data, setData] = useRecoilState(appState);

    const enableButton4 = () => {
        setData({...data, button4Enabled: true});
    }

    return (
        <button onClick={enableButton4} type="button" className="button-card">
            <Card sx={{ minWidth: 360, minHeight: 225 }}>
                <CardContent>
                    <Typography variant="body1">
                        Click me to enable the box on my right
                    </Typography>
                </CardContent>
            </Card>
        </button>
    );
}
