import { css } from '@emotion/core';

export const Button = (props) => {
  const { children, className, ...rest } = props;

  const styles = {
    button: css`
      cursor: pointer;
      color: #343a40;
      border-color: #343a40;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      border-radius: 0.25rem;
      transition: all 0.15s;
      width: 100%;

      :hover {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
      }

      :focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
        outline: 0;
        text-decoration: none;
      }
    `,
  };

  return (
    <button css={styles.button} {...rest}>
      {children}
    </button>
  );
};
