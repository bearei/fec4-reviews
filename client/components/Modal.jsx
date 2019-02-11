import React, {Component} from 'react';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    let visibility = this.props.show ? 'modal display-block' : 'modal: display: none';
    return (
      <div className={visibility}>
        <div className='modal-main'>
          <h1>MODAL</h1>
          <p>Form Stuff</p>
          <p>More form stuff</p>
          <button onClick={this.props.handleClose}> close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
