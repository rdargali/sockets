import React, { useReducer } from "react";

const CTX = React.createContext();

const reducer = (state, action) => {
  // const { from, msg, initials, topic } = action.payload; //destructure payload
  switch (action.type) {
    case "GET_MESSAGE":
      return {
        ...state,
        [action.payload.topic]: [
          ...state[action.payload.topic],
          {
            from: action.payload.from,
            msg: action.payload.msg,
            initials: action.payload.initials,
          },
        ],
      };

    default:
      return state;
  }
};

const Store = (props) => {
  const reducerHook = useReducer(reducer, initState);
  return <CTX.Provider value={}>{props.children}</CTX.Provider>;
};

export default Store;
