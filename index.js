const fs = require("fs");
const http = require("http");

// const tempIndex = fs.readFileList(`${__dirname}/index.html`, "utf-8");

// 获取文件路径
const getFilePath = () => {
  const files = fs.readdirSync("./image");
  console.log(files);
  return files;
};

// 获取图片

getFilePath();

const server = http.createServer((req, res) => {});
server.listen(3000, "127.0.0.1", (err, result) => {
  console.log("listening ......");
});
