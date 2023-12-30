import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import styles from './AssessmentForm.module.css';
import { Backdrop, Fade } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  maxWidth: "500px",
  bgcolor: 'white',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

interface IProps {
    open: boolean;
    close: () => void
}

export default function KeepMountedModal({open, close} : IProps) {

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
        <Box sx={style}>
        <div className={styles.header}>
          <h6>Create new assessment</h6>
          <button onClick={close}>
            <CloseIcon />
          </button>
          </div>
        <div className={styles.body}>
            <div className={styles.form_element}>
                <label>Name of Assessment</label>
                <input type='text' placeholder='Type Here'/>
            </div>
            <div className={styles.form_element}>
                <label>Purpose of Assessment</label>
                <input type='text' placeholder='Type Here'/>
            </div>
            <div className={styles.form_element}>
                <label>Description</label>
                <input type='text' placeholder='Type Here'/>
            </div>
            <div className={styles.form_element}>
                <label>Skills</label>
                <div className={styles.pill_container}>
                    <span className={styles.pill}>UI / UX <CloseIcon fontSize={'small'} /></span>
                    <span className={styles.pill}>Web Dev <CloseIcon fontSize={'small'} /></span>
                    <span className={styles.pill}>UI / UX <CloseIcon fontSize={'small'} /></span>
                    <span className={styles.pill}>Web Dev <CloseIcon fontSize={'small'} /></span>
                </div>
                <input type='text' placeholder='HH:MM:SS'/>
            </div>
            <div className={styles.form_element}>
                <label>Duration of Assessment</label>
                <input type='text' placeholder='HH:MM:SS'/>
            </div>
        </div>
        <button className={styles.submit} onClick={close}>Save</button>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}