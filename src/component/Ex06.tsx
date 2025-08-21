import React, {Component, ChangeEvent, FormEvent} from "react"
interface State {
    selected: "male" | "female" | "other"
    gender: "male" | "female" | "other"
}

class FormGender extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selected: "male",
            gender: "male"
        }
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ selected: e.target.value as "male" | "female" | "other" })
    }
    submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.setState({ gender: this.state.selected })
    }
    renderGender = () => {
        if (this.state.gender === "male") return "Nam"
        else if (this.state.gender === "female") return "Nữ"
        else return "Khác"
    }
    render(): React.ReactNode {
        return(
            <form onSubmit={this.submitForm}>
                <p>Giới tính: {this.renderGender()} </p>
                <input type="radio" name="gender" value="male" checked={this.state.selected === "male"} onChange={this.handleChange} />
                <label htmlFor="male">Nam</label><br />
                <input type="radio" name="gender" value="female" checked={this.state.selected === "female"} onChange={this.handleChange} />
                <label htmlFor="female">Nữ</label><br />
                <input type="radio" name="gender" value="other" checked={this.state.selected === "other"} onChange={this.handleChange} />
                <label htmlFor="other">Khác</label><br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default FormGender