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

        if (!data.button5Enabled) {
            let button5Enabled = value.toLowerCase() === 'activate button';
            button5Enabled && setData({...data, button5Enabled});
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="body1">
                    Input Secret
                </Typography>

                <TextField id="phrase" type="text" onChange={onChange} />
            </CardContent>
        </Card>
    );
}
