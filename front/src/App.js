import React, { useState } from 'react';
import style from './App.module.css';
import Header from './components/Header';
import Textarea from './components/Textarea';

function App() {
  const [factorText, setFactorText] = useState(
    'Type:          Single, Span, Stripe, Mirror, RAID-5\nSize:          10, 100, 500, 1000, 5000, 10000, 40000\nFormat method: Quick, Slow\nFile system:   FAT, FAT32, NTFS\nCluster size:  512, 1024, 2048, 4096, 8192, 16384, 32768, 65536\nCompression:   On, Off',
  );
  return (
    <div className={style.rootContainer}>
      <Header />
      <div className={style.contentArea}>
        <Textarea value={factorText} onChange={setFactorText} />
        <button
          style={{ alignSelf: 'center', margin: '0 1rem' }}
          onClick={() => console.log(JSON.stringify(factorText))}
        >
          generate=>
        </button>
        <Textarea />
      </div>
    </div>
  );
}

export default App;
