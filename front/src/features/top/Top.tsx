import React, { useCallback, useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { Header } from '../header';
import style from './Top.module.css';

export const Top = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [factorText, setFactorText] = useState(
    '#############################################################\n# Paste test factors here.\n# Check the documents for more details.\n# https://github.com/Microsoft/pict/blob/master/doc/pict.md\n#############################################################\n\nType:          Single, Span, Stripe, Mirror, RAID-5\nSize:          10, 100, 500, 1000, 5000, 10000, 40000\nFormat method: Quick, Slow\nFile system:   FAT, FAT32, NTFS\nCompression:   On, Off\n\nif [Type] = "RAID-5" then [Compression] = "Off";\nif [Size] >= 500 then [Format method] = "Quick";',
  );
  const [result, setResult] = useState('');

  const onGenerate = useCallback(() => {
    setIsFetching(true);
    setResult('');
    console.log(process.env);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_cases`, {
      method: 'POST',
      body: JSON.stringify({ factors: factorText }),
    })
      .then((res) => res.json())
      .then((resJson) => setResult(resJson))
      .catch((err) => setResult(err.message))
      .finally(() => setIsFetching(false));
  }, [factorText]);

  return (
    <div className={style.rootContainer}>
      <Header />

      <div className={style.description}>
        An online service that easily generates pair-wise test cases.
        <br />
        It's powered by
        <a href="https://github.com/microsoft/pict">Microsoft Pict</a> under the
        hood.
      </div>

      <div className={style.row}>
        <div className={style.factors}>
          <Textarea
            aria-label="factors"
            value={factorText}
            onChange={setFactorText}
            style={{ flex: 1 }}
          />
          <a
            download="test-factors.txt"
            href={
              'data:application/csv;charset=utf-8,' +
              encodeURIComponent(factorText)
            }
            className={style.download}
            tabIndex={-1}
          >
            Download
          </a>
        </div>

        <Button
          onClick={onGenerate}
          style={{ alignSelf: 'center', width: '8rem', margin: '0 1rem' }}
        >
          {isFetching ? 'loading...' : 'Generate=>'}
        </Button>

        <div className={style.results}>
          <Textarea aria-label="results" value={result} style={{ flex: 1 }} />
          <div>
            <a
              download="test-results.txt"
              href={
                'data:application/csv;charset=utf-8,' +
                encodeURIComponent(result)
              }
              className={style.download}
              tabIndex={-1}
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
