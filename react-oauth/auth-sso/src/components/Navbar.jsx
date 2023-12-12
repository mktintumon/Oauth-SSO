import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { loginWithRedirect, isAuthenticated, logout,user } = useAuth0();
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">MOHIT WEBSITE</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>

          {isAuthenticated ? (
            <>
            <MDBNavbarBrand>Welcome&nbsp;{user.name}</MDBNavbarBrand> &nbsp;&nbsp;&nbsp;
            <MDBBtn
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </MDBBtn>
            
            </>
          ) : (
            <MDBBtn onClick={() => loginWithRedirect()}>
              Log In with OAuth
            </MDBBtn>
          )}
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
