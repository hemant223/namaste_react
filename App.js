/**** 
*    All about Parcel
*
* Created a Server
* HMR - Hot Module Replacement
* File  Watcher Algorithm - C++
* BUNDLING
* MINIFY
* Cleaning our Code
* Dev and Production Build
* Super Fast Build  algorithm
* Image Optimization
* Caching While Development
* Compatble with older version of browser
* HTTPS on dev
* port Number
* Consist Hashing Algotithm
* Zero  Config
*
*
* Transitive Dependencies (Depth dependincies)
*
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{
    id:"title"
},"Heading 1 for parcel");
const heading2 = React.createElement("h2",{
    id:"title"
},"Heading 2");

const container = React.createElement("div",{
    id:"container"
},[heading1,heading2]); 


// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)