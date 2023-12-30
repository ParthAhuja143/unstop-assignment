import {ReactComponent as PlusIcon} from '../../assets/plusIcon.svg'
import styles from './NewAssessment.module.css'

interface IProps {
    handleOpen: () => void;
}

const NewAssessment = ({handleOpen} : IProps) => {
  return (
    <div className={styles.assessment} style={{cursor: 'pointer'}} onClick={handleOpen}>
      <div className="img-con">
        <PlusIcon />
      </div>
      <p className="item1-head">New Assessment</p>
      <p className="item1-text" style={{textAlign: 'center'}}>
        From here you can add questions of multiple types like MCQs,
        subjective(text or paragraph)!
      </p>
    </div>
  );
};

export default NewAssessment;
