import { useState } from 'react'
import styles from './Main.module.css'
import {ReactComponent as Filter} from '../../assets/filter.svg';
import {ReactComponent as Charts} from '../../assets/chart.svg';
import {ReactComponent as Maginfy} from '../../assets/magnifier.svg';
import {ReactComponent as Hamburger} from '../../assets/hamburger.svg';
import AssessmentOverview from '../../components/AssessmentOverview/AssessmentOverview';
import NewAssessment from '../../components/NewAssessment/NewAssessment';
import Assessment from '../../components/Assessment/Assessment';
import { IconButton, useMediaQuery } from '@mui/material';
import KeepMountedModal from '../../components/AssessmentForm/AssessmentForm';
import AppHeader from '../../components/AppHeader/AppHeader';


const Main = ({handleOpen}: any) => {
    const [showOverview, setShowOverview] = useState(false);
    const isMatch = useMediaQuery("(max-width: 700px)");
    const [modal, setModal] = useState(false);

    const toggleShow = () => {
        setShowOverview(!showOverview);
    }
  return (
    <div className={styles.main}>
        <AppHeader handleOpen={handleOpen} />
        <div className={styles.assess_overview_container}>
            {!isMatch && <div className={styles.assess_overview}>
                <h2>Assessments Overview</h2>
            </div>}
            <AssessmentOverview show={showOverview}/>
        </div>

        <div className={styles.assess_overview_container}>
            <div className={styles.assess_overview}>
                <div style={{display: 'flex'}}>
                <h2>My Assessment</h2>
                </div>
                <div className={styles.assess_buttons}>
                    <IconButton><Filter /></IconButton>
                    <IconButton><Maginfy /></IconButton>
                    <IconButton onClick={toggleShow}><Charts /></IconButton>
                </div>
            </div>
            <div className={isMatch ? styles.assess__mobile : styles.assess}>
                <NewAssessment handleOpen={() => setModal(true)} />
                {[1,2,3, 4].map(elem => {
                    return (
                        <Assessment key={elem} />
                    )
                })}
            </div>
        </div>
        <KeepMountedModal open={modal} close={() => {
            setModal(false);
        }} />
    </div>
  )
}

export default Main