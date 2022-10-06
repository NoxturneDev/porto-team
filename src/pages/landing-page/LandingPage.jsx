import React, { useEffect } from "react";
import Nav from '../../components/Nav'
import Introduction from './Introduction'
import Jumbotron from "./Jumbotron";
function LandingPage() {
  return (
    <div id="luxy" style={{ overflowX: 'hidden' }} >
      <Nav />
      <Jumbotron />
      <Introduction />
    </div>
  );
}

export default LandingPage;