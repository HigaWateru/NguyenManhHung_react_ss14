import React, {Component} from "react"

interface State {
    changeState: boolean
}

class Exercise04 extends Component<{}, State> {
    state: State = {
        changeState: true
    }
    toggleState = () => {
        this.setState({ changeState: !this.state.changeState })
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<State>, nextContext: any): boolean {
        return false
    }
    render() {
        return (
            <div>
                <h1>Slogan: {this.state.changeState ? "Học code để đi làm" : "Học code để thành công"}</h1>
                <button onClick={this.toggleState}>Change state</button>
            </div>
        )
    }
}

export default Exercise04