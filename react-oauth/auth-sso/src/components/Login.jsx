import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>LOGIN</h1>
      <div style={{ width: "70%", margin: "auto" }}>
        <MDBContainer fluid className="p-3 my-5">
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid"
                alt="Phone"
              />
            </MDBCol>

            <MDBCol col="4" md="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn className="mb-4 w-100" size="lg">
                Sign in
              </MDBBtn>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">
                  -----------------------------&nbsp;&nbsp;OR&nbsp;&nbsp;----------------------------------
                </p>
              </div>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "red" }}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Continue with google
              </MDBBtn>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "black" }}
              >
                <MDBIcon fab icon="github" className="mx-2" />
                Continue with Github
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default App;
