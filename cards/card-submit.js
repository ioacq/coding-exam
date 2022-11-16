import * as React from 'react';

import {
  Dialog,
  Button
} from '@mui/material';

import { useRecoilValue } from 'recoil';
import { appState } from '../atoms';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CardSubmit() {
    const [open, setOpen] = React.useState(false);
    const data = useRecoilValue(appState);

    const isEnabled = () => {
        return data.button4Enabled && data.phraseMatched && !data.img.hasError && data.counter >= 3;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen} disabled={!(isEnabled())}>
                Submit
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Congratulations for completing the puzzle!
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>
                    <img src={data.img.src}></img>

                    <List>
                        {data.json && Object.keys(data.json.data).map((key, index) => {
                            return (
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemText primary={`${key}:${data.json.data[key]}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Close
                </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}
