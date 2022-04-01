const bookRouter = require("./bookRouter");
const userRouter = require("./userRouter");

module.exports = (app) => {
  app.use(userRouter, bookRouter);
};
