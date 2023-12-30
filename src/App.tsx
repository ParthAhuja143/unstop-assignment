
import { useState } from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Drawer/Drawer';
import Main from './layout/Main/Main';

function App() {

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <div className="App" style={{display: 'flex'}}>
     <PersistentDrawerLeft open={open} handleClose={onClose} />
      <Main open={open} handleOpen={handleOpen} />
    </div>
  );
}

export default App;
