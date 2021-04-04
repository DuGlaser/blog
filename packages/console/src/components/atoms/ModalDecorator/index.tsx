import React from 'react';
import ReactModal from 'react-modal';

type Props = {
  className?: string;
} & ReactModal.Props;

ReactModal.setAppElement('body');

export const ModalDecorator: React.FC<Props> = ({ className, ...props }) => {
  const [name] = (className && className.split(' ')) || [''];
  const styles = name
    ? {
        portalClassName: name,
        overlayClassName: `${name}__Overlay`,
        className: `${name}__Content`,
      }
    : {};

  return <ReactModal {...styles} {...props} />;
};
