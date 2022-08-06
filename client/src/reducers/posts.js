export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH ALL":
      return action.payload;
    default:
      return posts;
  }
};
