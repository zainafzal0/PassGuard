import React from "react";
import passLogo from "../Assets/pass-logo.png";
import notesLogo from "../Assets/notes-logo.png";
import cardLogo from "../Assets/card-logo.png";
import addressLogo from "../Assets/address-logo.png";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function DashboardContent() {
  const loginInfo = useSelector((state) => state.loginReducer);
  const history = useHistory();

  return (
    <div className="DashboardContent" data-aos="fade-down">
      <h1 id="welcome-heading">Welcome {loginInfo.name}!</h1>

      <div class="container dashboard-cards" data-aos="fade-in">
        <div class="row">
          <div class="col-sm">
            <div
              class="card dashboard-card"
              onClick={() => {
                history.push("/dashboard/passwords");
              }}
              style={{ width: "18rem" }}
            >
              <img src={passLogo} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Passwords</h5>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card dashboard-card"
              onClick={() => {
                history.push("/dashboard/credit-cards");
              }}
              style={{ width: "18rem" }}
            >
              <img src={cardLogo} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Credit Cards</h5>
              </div>
            </div>
          </div>

          <div class="col-sm">
            <div
              class="card dashboard-card"
              onClick={() => {
                history.push("/dashboard/notes");
              }}
              style={{ width: "18rem" }}
            >
              <img src={notesLogo} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Notes</h5>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card dashboard-card"
              onClick={() => {
                history.push("/dashboard/addresses");
              }}
              style={{ width: "18rem" }}
            >
              <img src={addressLogo} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Addresses</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
