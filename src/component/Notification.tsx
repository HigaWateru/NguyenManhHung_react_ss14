import React, {Component} from "react"

class Notification extends Component {
    componentDidMount(): void {
        console.log("Component đã được mount!")
    }
    render(): React.ReactNode {
        return (
            <div>
                <h2>Notification Component</h2>
            </div>
        )
    }
}

export default Notification