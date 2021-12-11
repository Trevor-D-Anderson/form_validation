import React, { useReducer } from "react";

const UserForm = () => {
  const initialState = {
    firstName: {
      value: "",
      error: null,
    },
    lastName: {
      value: "",
      error: null,
    },
    email: {
      value: "",
      error: null,
    },
  };

  function reducer(state, action) {
    return {
      ...state,
      [action.type]: action.payload,
    };
    //   switch (action.type) {
    //     case "firstName":
    //       if (state.firstName.length > 0 && state.firstName.length < 3) {
    //         return console.log("If worked"), { error: "This Worked" };
    //       } else {
    //         return (
    //           console.log(state), { ...state, [action.type]: action.payload }
    //         );
    //       }
    //     default:
    //       return { ...state, [action.type]: action.payload };
    //   }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(state);
    dispatch({
      type: name,
      payload: value,
      error: null,
    });
  }

  return (
    <div>
      {JSON.stringify(state)}
      <div>
        <label>
          {state.firstName.error !== null && (
            <p className="error">{state.firstName.error}</p>
          )}
          <span>First Name:</span>
          {""}
          <input
            name="firstName"
            value={state.firstName.value}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Last Name:</span>{" "}
          <input
            name="lastName"
            value={state.lastName.value}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Email:</span>{" "}
          <input
            name="email"
            value={state.email.value}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default UserForm;
