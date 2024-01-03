import { useState } from 'react';
import DrawerPanel from './components/DrawerPanel';
import Toolbar from '@mui/material/Toolbar';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DrawerPanel />
    </>
  );
}

export default App;
