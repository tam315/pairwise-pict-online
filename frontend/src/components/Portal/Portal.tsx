import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface IProps {
  children: React.ReactNode;
}

export const Portal: React.FC<IProps> = (props) => {
  const { children } = props;
  let targetNode;

  // SSR
  if (typeof document === 'undefined') {
    return null;
  }

  useEffect(() => {
    return () => {
      document.body.removeChild(targetNode);
    };
  }, []);

  // Create a new div element as a child of BODY
  if (!targetNode) {
    targetNode = document.createElement('div');
    document.body.appendChild(targetNode);
  }

  // Render children as a child element of the created div
  return ReactDOM.createPortal(children, targetNode);
};
