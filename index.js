const server = require("./server");

const PORT = process.env.PORT || 3333;
server.use('/',(req,res)=>{
  res.status(200).json({message:'Working..........'})
})
server.listen(PORT, () => {
  console.log(`\n👾👾👾    blitzbuild\n 👾👾👾 >>> ⎈ ${PORT} <<<`);
});
