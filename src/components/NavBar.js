import React, { Component } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as ExploreIcon } from "../icons/compass-with-white-needles.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };
  }

  onOpenModalLogin = () => {
    this.setState({ login: true });
  };

  onCloseModalclose = () => {
    this.setState({ login: false });
  };

  render() {
    const { login } = this.state;
    return (
      <>
        <div className="nav">
          <div className="nav-1">
            <nav className="nav-2 nav-3">
              <div className="head-left head-nav">
                <a href="#" className="head-name">
                  Fusi Gallery
                </a>
              </div>
              <div style={{ overflowY: "visible" }} className="nav-right">
                <div style={{ justifyContent: "center" }} className="home-nav">
                  <div style={{ opacity: 0 }} className="nav-h1 nav-sm">
                    <div className="nav-sr">
                      <div className="nav-ser">
                        <div className="nav-sear"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-rc"></div>
              </div>

              {/* Nav Right Contents */}
              <div className="nav-rr"></div>
              <div className="right-cnt">
                {/*  */}
                <div className="nav-item">
                  <a href="#" className="home-btn hm">
                    <HomeIcon
                      style={{
                        width: 16,
                        height: 16,
                        fill: "rgb(112, 110, 255)",
                      }}
                    />
                    <span className="hm-txt">Home</span>
                  </a>

                  <a href="#" className="home-btn hm-ex">
                    <ExploreIcon
                      style={{
                        width: 16,
                        height: 16,
                        fill: "rgb(117, 120, 181)",
                      }}
                    />
                    <span className="hm-txt">Explore</span>
                  </a>
                </div>

                {/* Connect Button */}
                <div className="rr-btn" onClick={this.onOpenModalLogin}>
                  <a href="#" className="btn-cc">
                    Connect Wallet
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile view Nav Code */}
        <div className="btm-nav">
          <div className="btm-btns">
            <a href="#" className="nav-btn">
              <HomeIcon
                style={{ width: 20, height: 20, fill: "rgb(112, 110, 255)" }}
              />
            </a>
            <a href="#" className="nav-btn">
              <ExploreIcon
                style={{ width: 20, height: 20, fill: "rgb(112, 110, 255)" }}
              />
            </a>
            <a href="#" className="login-btn">
              <button className="l-btn lo-btn log-btn">Connect Wallet</button>
            </a>
          </div>
        </div>

        {/* Modal View Code */}
        <Modal open={login} onClose={this.onCloseModalclose}>
          <div className="modal-body">
            <h2>
              Login and Get <span>Started</span>
            </h2>
            <span className="subtitle">
              Fill your email below for Magic Login
            </span>
            <form
              className="contact-form form-validate4"
              novalidate="novalidate"
            >
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required=""
                  autocomplete="off"
                  aria-required="true"
                />
              </div>
              {/* <div className="form-group">
                <input
                  type="password"
                  name="pass"
                  className="form-control"
                  placeholder="Password"
                  required=""
                  autocomplete="off"
                  aria-required="true"
                />
              </div> */}
              <input
                className="btn btn-md btn-primary btn-center"
                id="login_btn"
                type="button"
                value="Login"
              />
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default Navbar;
