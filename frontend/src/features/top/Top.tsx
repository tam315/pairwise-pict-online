import { css } from 'emotion';
import React, { useCallback, useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { AdCard } from '../ads/AdCard';
import { Header } from '../header';

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

  const style = {
    rootContainer: css`
      background: #fafafa;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
    `,
    description: css`
      padding: 0 1rem;
      margin-top: 1rem;
      line-height: 1.8;
    `,
    converterRow: css`
      align-items: stretch;
      display: flex;
      flex: 1 0; /* expand */
      justify-content: space-between;
      padding: 1rem;
      @media (max-width: 700px) {
        flex-direction: column;
      }
    `,
    adsRow: css`
      flex: 0 0 90px;
      margin-top: 1rem;
      overflow: hidden;
      text-align: center;
    `,
    factors: css`
      display: flex;
      flex-direction: column;
      flex: 1;
    `,
    results: css`
      display: flex;
      flex-direction: column;
      flex: 1;
    `,
    generateButton: css`
      align-self: center;
      width: 8rem;
      margin: 1rem;
      ::after {
        content: ' =>';
      }
      @media (max-width: 700px) {
        ::after {
          content: none;
        }
      }
    `,
    download: css`
      display: block;
      margin: 0.5rem 0 1rem;
      text-align: center;
      @media (max-width: 700px) {
        display: none;
      }
    `,
  };

  return (
    <div className={style.rootContainer}>
      <Header />

      <div className={style.adsRow}>
        <AdCard />
      </div>

      <div className={style.description}>
        An online service that easily generates pair-wise test cases.
        <br />
        It's powered by
        <a href="https://github.com/microsoft/pict">Microsoft Pict</a> under the
        hood.
      </div>

      <div className={style.converterRow}>
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
            Download Test Factors as .txt
          </a>
        </div>

        <Button onClick={onGenerate} className={style.generateButton}>
          {isFetching ? 'loading...' : 'Generate'}
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
              Download Results as .txt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
