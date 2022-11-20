import * as React from 'react';

import { useRecoilValue } from 'recoil';
import { appState } from '../atoms';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

    const isEnabled = () => data.button4Enabled && data.buttonSubmitEnabled && !data.img.hasError && data.counter >= 3;

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const contentStyle = {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${data.img.src})`
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
                <DialogContent dividers style={contentStyle}>
                    <h4 className='overlay-text'>Congratulations for completing the puzzle!</h4>

                    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                      <Grid xs md={8} mdOffset={2}>
                        <Item>
                          <List>
                            {data.json && Object.keys(data.json.data).map((key) => {
                                return (
                                    <ListItem key="{key}" disablePadding>
                                        <ListItemButton>
                                        <ListItemText primary={`${key}:${data.json.data[key]}`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                          </List>
                        </Item>
                      </Grid>
                    </Grid>
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
