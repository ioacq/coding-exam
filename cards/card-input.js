import * as React from 'react';

import {
  Card,
  CardContent,
  Typography,
  TextField,
} from '@mui/material';

import { useRecoilState } from 'recoil';
import { appState } from '../atoms';

export default function CardInput() {
    const [data, setData] = useRecoilState(appState);

    const onChange = (e) => {
        const value = e.target.value;
        setData({...data, phrase: value, phraseMatched: value.toLowerCase() === 'activate button'});
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="body1">
                    Input Secret
                </Typography>

                <TextField id="phrase" type="text" value={data.phrase} onChange={onChange} />;
            </CardContent>
        </Card>
    );
}
