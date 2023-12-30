import React from 'react'
import styles from './Assessment.module.css'
import { Avatar, AvatarGroup, IconButton } from '@mui/material'
import {ReactComponent as AssessmentIcon} from '../../assets/assessmentHeader.svg'
import { MoreVert } from '@mui/icons-material'
import {ReactComponent as CalendarIcon} from '../../assets/calendarIcon.svg'
import {ReactComponent as ShareIcon} from '../../assets/shareIcon.svg'
import { deepOrange, deepPurple } from '@mui/material/colors'


const Assessment = () => {
  return (
    <div className={styles.assessment}>
        <div className={styles.assessment__header}>
            <span className={styles.assessment__icon}>
                <AssessmentIcon />
            </span>
            <span className={styles.assessment_more}>
                <IconButton>
                <MoreVert />
                </IconButton>
            </span>
        </div>
        <h4>
            Math Assessment
        </h4>
        <div className={styles.assessment__desc}>
            <h6>Job</h6>
            <span className={styles.assessment__date}>
                <CalendarIcon style={{
                    margin: '0 5px'
                }} />
                20 Apr 2023
            </span>
        </div>
        <div className={styles.assessment__footer}>
            <div>
            <div className={styles.assessment__footer__div}>
                <p className={styles.assessment__footer_p}>00</p>
                <sub className={styles.assessment__footer_sub}>Duration</sub>
            </div>
            <div className={styles.assessment__footer__div}>
                <p className={styles.assessment__footer_p}>00</p>
                <sub className={styles.assessment__footer_sub}>Questions</sub>
            </div>
            </div>
            <div className={styles.assessment__footer__right}>
                <button className={styles.assessment_button}>
                    <ShareIcon />
                    Share
                </button>
                <AvatarGroup
                    max={1}
                    >
                        <Avatar sx={{ bgcolor: deepOrange[500], width:30, height: 30 , fontSize: '14px' }}>N</Avatar>
                        <Avatar sx={{ bgcolor: deepPurple[500], width: 30, height: 30, fontSize: '14px'  }}>OP</Avatar>
                </AvatarGroup>
            </div>
        </div>
    </div>
  )
}

export default Assessment