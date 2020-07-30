import { useAdBlockDetector } from 'adblock-detector-hook';
import { css } from 'emotion';
import React, { useCallback, useEffect, useState } from 'react';
import { ModalDialog } from '../../components/ModalDialog';

interface IProps {
  children: React.ReactElement;
}

export const AdBlockGuard: React.FC<IProps> = (props) => {
  const { children } = props;
  const { detected } = useAdBlockDetector();
  const [isCautionDialogOpen, setIsCautionDialogOpen] = useState<boolean>(
    false,
  );

  useEffect(() => {
    if (detected) {
      setIsCautionDialogOpen(true);
    }
  }, [detected]);

  const onCloseButtonClicked = useCallback(() => {
    setIsCautionDialogOpen(false);
  }, []);

  const styles = {
    buttonRow: css`
      text-align: right;
    `,
    button: css`
      background: none;
    `,
  };

  return (
    <>
      {children}
      <ModalDialog isOpen={isCautionDialogOpen}>
        <>
          <div>
            <p>We&apos;ve noticed that you are using an ad blocker.</p>
            <p>
              Please <b>disable your ad blocker</b> for this site and help us to
              provide free services.
            </p>
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.button} onClick={onCloseButtonClicked}>
              Close
            </button>
          </div>
        </>
      </ModalDialog>
    </>
  );
};
