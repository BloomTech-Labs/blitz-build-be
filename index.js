require('dotenv').config('./env')
const server = require("./server");

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`\n ${PORT} \n`);
});
