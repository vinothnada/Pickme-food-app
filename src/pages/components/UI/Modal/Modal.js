import { Fragment } from "react";

import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  console.log("Modal Rendering");
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  console.log('props',props)
  return (
    props.show && (
      <Fragment>
        (<Backdrop onClose={props.onClose} />)
          <ModalOverlay>{props.children}</ModalOverlay>,
      </Fragment>
    )
  );
};

export default Modal;
