import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { useAuth0 } from "@auth0/auth0-react";
import Data from "./Data";

export default function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <Data />
      ) : (
        <div style={{ width: "80%", margin: "auto", marginTop: "3rem" }}>
          <MDBCarousel showIndicators showControls fade>
            <MDBCarouselItem itemId={1}>
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                className="d-block w-100"
                alt="..."
              />
              <MDBCarouselCaption>
                <h3>Please LOGIN to continue!!!</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={2}>
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                className="d-block w-100"
                alt="..."
              />
              <MDBCarouselCaption>
                <h3>Please LOGIN to continue!!!</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={3}>
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                className="d-block w-100"
                alt="..."
              />
              <MDBCarouselCaption>
                <h3>Please LOGIN to continue!!!</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
      )}
    </>
  );
}
