import { useCallback, useEffect, useMemo, useState } from 'react';

interface IOptions {
  lazy?: boolean;
}

interface IResults {
  detected: boolean;
  check: () => Promise<void>;
}

export const useAdBlockDetector = (options: IOptions = {}): IResults => {
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);

  const checkAdBlocker = useCallback(async () => {
    try {
      await fetch(
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        {
          method: 'HEAD',
          mode: 'no-cors',
        },
      );
      setAdBlockDetected(false);
    } catch (e) {
      // Failed, maybe because of an AdBlocker
      setAdBlockDetected(true);
    }
  }, []);

  useEffect(() => {
    if (options.lazy) {
      return;
    }
    checkAdBlocker();
  }, [checkAdBlocker, options.lazy]);

  const payload = useMemo(
    () => ({ detected: adBlockDetected, check: checkAdBlocker }),
    [adBlockDetected, checkAdBlocker],
  );

  return payload;
};
