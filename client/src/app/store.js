import { configureStore } from "@reduxjs/toolkit";

import postRedcuer from "../feautres/post/postSlice";

export default configureStore({
  reducer: { post: postRedcuer },
});
