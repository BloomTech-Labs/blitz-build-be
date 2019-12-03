const server = require("./server");
const getUserInfo = require('./data/middleware/restriced.middleware')
const PORT = process.env.PORT || 3333;

server.use('/',getUserInfo)
server.listen(PORT, () => {
  console.log(`\n👾👾👾    blitzbuild\n 👾👾👾 >>> ⎈ ${PORT} <<<`);
});
