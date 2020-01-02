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

    module: {
        rules: [
            {
                // js와 jsx 파일에 바벨을 적용하여 최신이나 실험적인 문법을 예전 문법으로 바꿔주겠다.
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        ]
    },

    // 출력
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js"
    }
};