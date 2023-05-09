const init = {
  fullName: "",
  userName: ""
};

export default function reducers(prevState = init, action = { type: "" }) {
  let tmp = prevState;
  switch (action.type) {
    case "ADD_USER":
      tmp.fullName = action.payload;
      return { ...tmp };
    case "ADD_USER_ID":
      tmp.userName = action.payload;
      return { ...tmp };
    case "CLEAR":
      return {
        ...init
      };
    default:
      return {
        ...init
      };
  }
}
