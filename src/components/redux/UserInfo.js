import { useSelector, useDispatch } from "react-redux";

export default function UserInfo() {
  const userDetails = useSelector((state) => state);
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    const SERVICE_URL = "http://localhost:3030/users";
    e.preventDefault();
    console.log(
      " handleSubmit : " +
        userDetails.fullName +
        " userName : " +
        userDetails.userName
    );
    const resp = await fetch(SERVICE_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: userDetails.fullName,
        userid: userDetails.userName
      })
    });
    console.log(resp);
    dispatch({ type: "CLEAR" });
  }

  return (
    <div className="mui-container">
      <div className="mui-panel">
        <form className="mui-form" onSubmit={handleSubmit}>
          <div className="mui-textfield">
            <input
              type="text"
              value={userDetails ? userDetails.fullName : ""}
              onChange={(e) => {
                dispatch({ type: "ADD_USER", payload: e.target.value });
              }}
            />
            <label>Full Name</label>
          </div>
          <div className="mui-textfield">
            <input
              type="text"
              value={userDetails ? userDetails.userName : ""}
              onChange={(e) => {
                dispatch({ type: "ADD_USER_ID", payload: e.target.value });
              }}
            />
            <label>User Name </label>
          </div>
          <button className="mui-btn mui-btn--primary">Add</button>
        </form>
      </div>
    </div>
  );
}
