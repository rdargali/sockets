import React from "react";

const CTX = React.createContext();

const Store = (props) => {
  return <CTX.Provider value={}>{props.children}</CTX.Provider>;
};

export default Store;
