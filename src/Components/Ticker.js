import React, { Component } from "react";
import { connect } from "react-redux";
import numberWithCommas from "./NumberwithComma";
import TickerSocketConnection from "./SocketConnection";

import icon from "../images/icon.svg"
import info from "../images/info.png"
import down from "../images/down.png"
import up from "../images/up.png"
import analy from "../images/analy.svg"
import ques from "../images/ques.svg"




class Ticker extends Component {
  render() {
    const {
      lastPrice,
      volume,
      high,
      low,
      dailyChange,
      dailyChangeRelative
    } = this.props.widget;

    return (
      <div className="ui-panel bg-wrap main-ticker custom-scrollbar">
        <div className="main-ticker__wrapper">
          <div className="main-ticker_container">
            <img
              src={icon}
              alt="icon"
              style={{
                width: "10px",
                height: "40px",
                flex: "0 0 40px",
                color: "white",
                margin: "5px",
                paddingTop: "6%",
                display: "flex",
                filter: "saturate(0) brightness(180%)"
              }}
            ></img>
            <div className="main-ticker_items">
              <div>
                <span className="ui-tooltip ui-tooltip--underline ui-tooltip--cursor-help">
                  <p style={{ margin: "2px" }}>
                    <span>
                      <span>BTC</span>
                      <span className="show-soft">/</span>
                      <span>USD </span>
                    </span>
            
                    <img
                      src={info}
                      alt="info"
                      width="12px"
                    />
                  </p>
                </span>
              </div>
              <div>
                <p style={{ margin: "2px" }}>
                  <span style={{ paddingRight: "43px" }}>{lastPrice}</span>
                </p>
              </div>
              <div>
                <span className="show-soft">VOL</span>
                <span className="trigger ui-tooltip ui-tooltip--underline ui-tooltip--cursor-help">
                  <span>{volume}</span>
                </span>
                <span className="show-soft">BTC</span>
              </div>
              <div>
                <span
                  className={
                    dailyChange < 0 ? "bfx-red-text" : "bfx-green-text"
                  }
                >
                  <span>
                    {numberWithCommas(
                      Math.round(
                        dailyChange < 0 ? -1 * dailyChange : dailyChange
                      )
                    )}
                  </span>
                  {dailyChange < 0 ? (
                    <img
                      src={down}
                      alt="down"
                      width="15px"
                    />
                  ) : (
                    <img
                      src={up}
                      alt="up"
                      width="15px"
                    />
                  )}
                  (<span className=" ">{dailyChangeRelative}</span>
                  %)
                </span>
              </div>
              <div>
                <span className="show-soft">LOW</span>
                <span className=" " style={{ paddingRight: "17px" }}>
                  {low}
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span className="show-soft">HIGH</span>
                <span style={{ paddingRight: "13px" }}>{high}</span>
              </div>
            </div>
          </div>
          <div
            className="ranking-container"
            style={{ textAlign: "left", marginLeft: "61px", padding: "9px" }}
          >
            <span
              className="trigger ui-tooltip ui-tooltip--underline ui-tooltip--cursor-help"
              style={{ fontSize: "12px" }}
            >
              Your{" "}
              <span>
                <span style={{ fontSize: "12px" }}>BTC</span>
                <span className="show-soft">/</span>
                <span style={{ fontSize: "12px" }}>USD </span>
                <span style={{ fontSize: "12px" }}>Rank</span>
              </span>
            </span>
          </div>
        </div>

        <section className="main-ticker_buttons">
          <span className="santiment-button">
            <img
             src={analy}
              alt="analy"
              height="12"
              style={{ paddingTop: "10px" }}
            />
            <img
              src={ques}
              alt="ques"
              height="15"
              style={{ paddingTop: "10px" }}
            /> 
            <br></br>
            <TickerSocketConnection />
          </span>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    widget: state.content
  };
};
export default connect(mapStateToProps)(Ticker);
