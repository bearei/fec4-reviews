import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductRating from './ProductRating.jsx';

class ModalModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const visible = { ...this.state };
    return (
      <div>
        <div onClick={this.handleOpen}>Write</div>
        <Modal
          open={visible.show}
        >
          <div className="modal">
            <div id="modal-left">
              <img alt="" src="https://s7.landsend.com/is/image/LandsEnd/502853_FW18_FF_BLA?$prp_index_4up_v1$" />
              <h1>PRODUCT NAME AND PIC</h1>
            </div>
            <div id="modal-right">
              <div className="modal-right-el">
                <FontAwesomeIcon onClick={this.handleClose} className="cancel" icon="times-circle" size="lg" />
                <h1 className="review-title">My Review for COMPANY PRODUCT-NAME</h1>
                <p className="required">Required fields are marked with *</p>
              </div>
              <div className="modal-right-el">
                <ProductRating />
              </div>
              <div className="modal-right-el">
                <h1 className="review-header ">Product Rating*</h1>
                <input className="input-field" type="text" placeholder="Example: Makes hiking even easier" />
              </div>
              <div className="modal-right-el">
                <h1 className="review-header ">Review*</h1>
                <textarea className="input-field" rows="4" />
              </div>

              <div className="modal-right-el modal-grid">
                <div>
                  <h1 className="review-header ">Would you recommend this product to a friend?</h1>
                </div>
                <ul>
                  <li className="button-recommend">Yes</li>
                  <li className="button-recommend">No</li>
                </ul>
              </div>
              <div className="modal-right-el modal-grid">
                <div>
                  <h1 className="review-header ">Nickname*</h1>
                  <input className="input-field" type="text" placeholder="Example: jackie27" />
                </div>
                <div>
                  <h1 className="review-header ">Location</h1>
                  <input className="input-field" type="text" placeholder="Example: Seattle, WA" />
                </div>
              </div>
              <div className="modal-right-el modal-grid">
                <div>
                  <h1 className="review-header ">Email*</h1>
                  <input className="input-field" type="text" placeholder="Example: youremail@example.com" />
                </div>
              </div>
              <div className="modal-right-el modal-grid">
                <div>
                  <h1 className="review-header ">Fit</h1>
                </div>
                <div>
                  <input type="radio" name="fitbuttons" id="1" value="1" />
                  <input type="radio" name="fitbuttons" id="2" value="2" />
                  <input type="radio" name="fitbuttons" id="3" value="3" />
                  <input type="radio" name="fitbuttons" id="4" value="4" />
                  <input type="radio" name="fitbuttons" id="5" value="5" />
                  <p>Runs Small   Too Large</p>
                </div>
              </div>
              <div className="modal-right-el modal-grid">
                <div>
                  <h1 className="review-header ">Did you read product reviews online before first purchasing this item?</h1>
                </div>
                <div>
                  <select>
                    <option value="select">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="modal-right-el modal-grid">
                <div>
                  <h1 className="review-header ">Where did you purchase this product?</h1>
                </div>
                <div>
                  <select>
                    <option value="select">Select</option>
                    <option value="online">Online</option>
                    <option value="in-store">In-Store</option>
                  </select>
                </div>
              </div>
              <div className="modal-right-el">
                <h1 className="review-header ">What feedback do you have for the people who designed and manufactred this product?</h1>
                <textarea className="input-field" rows="4" />
              </div>
              <div className="modal-right-el">
                <input className="same-line" type='checkbox' />
                <span>
                  I agree to the Bazaarvoice
                  <span> Terms of Use & Privacy Policy</span>
                  *
                </span>
                <p>You may recieve emails regarding this submission.  Any emails will include the ability to opt out of future communications.</p>
                <button>Post review</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalModel;
