import { createStore } from "redux";
import reducers from "../reducers/reducers";

export default function UserStore() {
  return createStore(reducers, {});
}
