const initialState = [
  {
    firstName: "sagar",
    lastName: "keshvala",
    phone: "1234123456",
    email: "sagar@mail.com",
    password: "Sagar@1234",
  },
  {
    firstName: "john",
    lastName: "doe",
    phone: "1234512345",
    email: "john@doe.com",
    password: "John@1234",
  },
];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": 
      return action.payload;

    case "DELETE_USER":
      state.splice(action.payload, 1);
      return [...state];

    case "UPDATE_USER":
      return action.payload;
    default:
      return state;
  }
};

export default Reducer;
