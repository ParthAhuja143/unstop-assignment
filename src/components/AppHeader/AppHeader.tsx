import { IconButton, Tooltip, useMediaQuery } from "@mui/material";
import styles from "./AppHeader.module.css";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Desk } from "../../assets/laptop.svg";
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg";

const AppHeader = ({ handleOpen }: any) => {
  const isMatch = useMediaQuery("(max-width: 700px)");

  return (
    <>
    <div className={styles.appheader}>
      <div className={styles.left}>
        {isMatch && (
          <IconButton
            sx={{ color: "rgba(242, 248, 254, 1)", marginRight: "10px" }}
            onClick={handleOpen}>
            <Hamburger />
          </IconButton>
        )}
        <h6>Assessment</h6>
       {!isMatch && <div className={styles.tabs}>
          <span className={styles.tab_active}>My Assessment</span>
        </div>}
      </div>
      <Tooltip arrow enterTouchDelay={0} title={!isMatch ? "Resize your window to 375px!" : "Resize your window to 1200px"}>
      <IconButton>
        {isMatch ? <Phone /> : <Desk />}
      </IconButton>
      </Tooltip>
    </div>
     {isMatch && <div className={styles.tabs}>
        <span className={styles.tab_active}>My Assessment</span>
        <span className={styles.tab}>Unstops Assessment</span>
      </div>}
      </>
  );
};

export default AppHeader;
