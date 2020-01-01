const path = require("path");

module.exports = {
    name: "word-chain-setting",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    //입력
    entry: {
        app: ["./client"]
    },

    // 출력
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js"
    }
};
