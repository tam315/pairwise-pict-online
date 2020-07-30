import React, { useEffect } from 'react';

interface IProps {}

export const AdCard: React.FC<IProps> = ({}) => {
  useEffect(() => {
    if (!process.browser) {
      return;
    }
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
    }
    window.adsbygoogle.push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'inline-block', width: '1200px', height: '90px' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT}
      data-ad-slot={process.env.NEXT_PUBLIC_GOOGLE_AD_SLOT}
      data-full-width-responsive="true"
    ></ins>
  );
};
