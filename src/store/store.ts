import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function storeBuilder() {
  return configureStore({ reducer });
}
