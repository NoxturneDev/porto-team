import React, { useEffect } from "react";
import Nav from '../../components/Nav'
import Introduction from './Introduction'

function LandingPage() {
  return (
    <div id="luxy" style={{ overflowX: 'hidden' }} >
      <Nav />
      <Introduction />
    </div>
  );
}

export default LandingPage;