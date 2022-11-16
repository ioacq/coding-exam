import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useRecoilState } from 'recoil';
import { appState } from '../atoms';

export default function Card6() {
    const [data, setData] = useRecoilState(appState);

    let counter = data.counter;
    
    const increment = () => {
        counter += 1;
        setData({...data, increment, counter});
    }
    
    const setIncrementFn = () => {
        setData({...data, increment});
    }


    return (
        <button onClick={setIncrementFn} type="button" className="button-card" disabled={!data.phraseMatched}>
            <Card sx={{ minWidth: 360, minHeight: 225 }}>
                <CardContent>
                    <Typography variant="body1">
                        (To activate this button, enter "Activate button")<br/>
                        Click me to give the button on my left a function<br/>
                        to increase it's counter!
                    </Typography>
                </CardContent>
            </Card>
        </button>
    );
}
