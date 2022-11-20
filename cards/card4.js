import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { appState } from '../atoms';

export default function Card4() {
    const data = useRecoilValue(appState);
    const resetState = useResetRecoilState(appState);

    return (
        <button onClick={resetState} type="button" className="button-card" disabled={!data.button4Enabled}>
            <Card sx={{ minWidth: 360, minHeight: 225 }}>
                <CardContent>
                    <Typography variant="body1">
                        Click me to reset all the state
                    </Typography>
                </CardContent>
            </Card>
        </button>
    );
}
