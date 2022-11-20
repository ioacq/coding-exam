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

        setData({...data, input: value});

        if (!data.button5Enabled) {
            let button5Enabled = value.toLowerCase() === 'activate button';
            button5Enabled && setData({...data, input: value, button5Enabled});
        }
        else if (!data.buttonSubmitEnabled) {
            let valCharArray = [...value.toLowerCase()];
            valCharArray.sort();

            Object.entries(data.json.data)
                .forEach(([key, jsonValue]) => {
                    let jsonCharArray = [...jsonValue.toLowerCase()];
                    jsonCharArray.sort();

                    let buttonSubmitEnabled = jsonCharArray.join('') === valCharArray.join('');
                    buttonSubmitEnabled && setData({...data, input: value, buttonSubmitEnabled});
                });
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="body1">
                    Input Secret
                </Typography>

                <TextField id="phrase" type="text" value={data.input} onChange={onChange} />
            </CardContent>
        </Card>
    );
}
