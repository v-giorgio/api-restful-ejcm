const bookRouter = require("./bookRouter");
const userRouter = require("./userRouter");
const authorRouter = require("./authorRouter");

module.exports = (app) => {
  app.use(userRouter, authorRouter, bookRouter);
};
