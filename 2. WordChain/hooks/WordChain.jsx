const React = require("react");
const { Component } = React;

class WordChain extends Component {
    state = {
        word: "사다리",
        value: "",
        result: ""
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: "정답",
                word: this.state.value,
                value: ""
            });
            this.input.focus();
        } else {
            this.setState({
                result: "오답",
                value: ""
            });
            this.input.focus();
        }
    };

    onChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    input;

    onRefInput = c => {
        this.input = c;
    };

    render() {
        return (
            <React.Fragment>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChange} />
                    <button>입력!!</button>
                </form>
                <div>{this.state.result}</div>
            </React.Fragment>
        );
    }
}

module.exports = WordChain;
