const fs = require("fs");
const path = require("path");

const fsPromises = fs.promises;

/**
 * @param {String} copiedPath (被复制文件的地址，相对地址)
 * @param {String} resultPath (放置复制文件的地址，相对地址)
 */
async function copyFile(copiedPath, resultPath) {
  try {
    let _copiedPath = path.join(__dirname, copiedPath);
    let _resultPath = path.join(__dirname, resultPath);
    fsPromises
      .cp(_copiedPath, _resultPath, { recursive: true })
      .then(() => {
        Promise.resolve(`${_copiedPath}==>${_resultPath}:success`);
      })
      .catch((err) => {
        Promise.reject(
          `${_copiedPath}==>${_resultPath}:err:${JSON.stringify(err)}`
        );
      });
  } catch (e) {
    console.log(e);
  }
}

(async () => {
  try {
    copyFile("node_modules/element-plus/theme-chalk", ".");
  } catch (e) {
    console.log(e);
  }
})();
