import React, { useReducer } from "react";

export const CTX = React.createContext();

const initState = {
  Sockets: [
    {
      from: "rawand",
      msg: "what's up",
      initials: "RD",
    },
    {
      from: "nuj",
      msg: "not much",
      initials: "NZ",
    },
    {
      from: "rawand",
      msg: "cool",
      initials: "RD",
    },
    {
      from: "nuj",
      msg: "SOCKETS",
      initials: "NZ",
    },
  ],

  React: [
    {
      from: "rawand",
      msg: "sockets and react?",
      initials: "RD",
    },
    {
      from: "nuj",
      msg: "is that possible??",
      initials: "NZ",
    },
    {
      from: "rawand",
      msg: "no way man",
      initials: "RD",
    },
  ],
};

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
  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
};

export default Store;
