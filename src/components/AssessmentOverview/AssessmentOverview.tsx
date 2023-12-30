import {ReactComponent as CandidateIcon} from '../../assets/candidatesIcon.svg'
import {ReactComponent as TotalAssessmentsIcon} from '../../assets/totalAssessmentsIcon.svg'
import {ReactComponent as CandidatesSourceIcon} from '../../assets/candidatesSourceIcon.svg'
import {ReactComponent as TotalSourceIcon} from '../../assets/totalSourceIcon.svg'
import styles from './AssessmentOverview.module.css';
import { useMediaQuery } from '@mui/material';


const AssessmentOverview = ({show}: {show : boolean}) => {

    const isMatch = useMediaQuery("(max-width: 700px)");

  return (
    <div className={isMatch === true && show === false ? styles.assessment_close : styles.assessment_overview}>
      <div className={styles.assessment_overview_box}>
        <p className={styles.assessment_overview_title}>Total Assessments</p>
        <div className={styles.assessment_overview_stat}>
          <TotalAssessmentsIcon />
          <p className={styles.assessment_overview_number}>34</p>
        </div>
      </div>
      <div className={styles.assessment_overview_box}>
        <p className={styles.assessment_overview_title}>Total Purpose</p>
        <div className={styles.assessment_overview_stat}>
          <TotalSourceIcon />
          <p className={styles.assessment_overview_number}>11</p>
        </div>
      </div>
      <div className={styles.assessment_overview_box}>
        <p className={styles.assessment_overview_title}>Candidates</p>
        <div className={styles.assessment_overview_stat}>
          <CandidateIcon />
          <div className={styles.assessment_overview_sub_box_border}>
            <div className={styles.assessment_stat_box}>
              <p className={styles.assessment_overview_number}>11,145</p>
              <p className={styles.assessment_number_green}>+89</p>
            </div>
            <p className={styles.assessment_sub}>Total Candidates</p>
          </div>
          <div className={styles.assessment_overview_sub_box}>
            <div className={styles.assessment_stat_box}>
              <p className={styles.assessment_overview_number}>1,14</p>
              <p className={styles.assessment_number_green}>+89</p>
            </div>
            <p className={styles.assessment_sub}>Who Attempted</p>
          </div>
        </div>
      </div>
      <div className={styles.assessment_overview_box_no_border}>
        <p className={styles.assessment_overview_title}>Candidate Source</p>
        <div className={styles.assessment_overview_stat}>
          <CandidatesSourceIcon />
          <div className={styles.assessment_overview_sub_box_border}>
            <div className={styles.assessment_stat_box}>
              <p className={styles.assessment_overview_number}>11,100</p>
              <p className={styles.assessment_number_green}>+89</p>
            </div>
            <p className={styles.assessment_sub}>Email</p>
          </div>
          <div className={styles.assessment_overview_sub_box_border}>
            <div className={styles.assessment_stat_box}>
              <p className={styles.assessment_overview_number}>145</p>
              <p className={styles.assessment_number_green}>+89</p>
            </div>
            <p className={styles.assessment_sub}>Social Share</p>
          </div>
          <div className={styles.assessment_overview_sub_box}>
            <div className={styles.assessment_stat_box}>
              <p className={styles.assessment_overview_number}>145</p>
              <p className={styles.assessment_number_green}>+89</p>
            </div>
            <p className={styles.assessment_sub}>Unique Link</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentOverview;
