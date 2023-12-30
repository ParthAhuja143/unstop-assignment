import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import styles from './Drawer.module.css'
import  {ReactComponent as AssessmentsIcon} from '../../assets/assessmentIcon.svg';
import  {ReactComponent as DashboardIcon} from '../../assets/dashboard.svg';
import  {ReactComponent as LibraryIcon} from '../../assets/library.svg';
import  {ReactComponent as RoundIcon} from '../../assets/round.svg';
import { useMediaQuery } from '@mui/material';
import { Close } from '@mui/icons-material';

const drawerWidth = 140;
const drawerMobileWidth = 300;

const menuListMap = [
  {label: 'Dashboard', icon: DashboardIcon },
  {label: 'Assessment', icon: AssessmentsIcon},
  {label: 'Library', icon: LibraryIcon}

]


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface IProps{
  open: boolean;
  handleClose: () => void
}
export default function PersistentDrawerLeft({open, handleClose}: IProps) {

  const isMatch = useMediaQuery("(max-width: 700px)");

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <Drawer
        sx={{
          zIndex: 1200,
          width: isMatch ? drawerMobileWidth : drawerWidth,
          position: isMatch ? 'fixed' : 'relative',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isMatch ? drawerMobileWidth : drawerWidth,
            boxSizing: 'border-box',
            position: isMatch ? 'fixed' : 'relative',
            minHeight: '100vh'
          },
        }}
        anchor="left"
        variant='persistent'
        open={isMatch ? open : true}
      >
        <DrawerHeader>
          {isMatch && <IconButton onClick={handleClose}>
            <Close />
          </IconButton>}
        </DrawerHeader>
        <div className={styles.list}>
        {
          menuListMap.map(item => {
            return (
              <div style={{cursor: 'pointer'}} className={item.label === 'Assessment' ? styles.list__item__active :  styles.list__item}>
                <item.icon className={styles.list__icon} />
                <p className={styles.list__text}>{item.label}</p>
              </div>
            )
          })
        }
        </div>
        <div className={styles.list}>
          <div className={styles.pill}>
            <p className={styles.pill__text}>Admin</p>
          </div>
        {
          ['Round Status'].map(item => {
            return (
              <div style={{cursor: 'pointer'}} className={styles.list__item}>
                <RoundIcon className={styles.list__icon} />
                <p className={styles.list__text}>{item}</p>
              </div>
            )
          })
        }
        </div>
      </Drawer>
    </Box>
  );
}
