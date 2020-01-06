const path = require("path");
const webpack = require("webpack");

module.exports = {
    name: "response-check-setting",
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
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    //plugin의 모음이 preset
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: { browsers: ["> 5% in KR"] },
                                debug: true
                            }
                        ],
                        "@babel/preset-react"
                    ], // @babel/preset-env가 브라우져 지원을 설정하는 것인데 세부 설정하는 방법 //browserslist
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "react-hot-loader/babel"
                    ]
                }
            }
        ]
    },
    plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
    // 출력
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/dist"
    }
};
