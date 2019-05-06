import React from "react";
import { Footer } from 'react-materialize';

import "./footer.css";

const Footing = (props) => (
    <Footer
        copyrights="2019 Copyright ScholarShip"
        className="blue lighten-1"
    >
        <h5 className="white-text">
        ScholarShip
        </h5>
        <p className="grey-text text-lighten-4">
        A tool to help navigate the rough seas of K-8. 
        </p>
    </Footer>
);

export default Footing;