import './Ex5.css'
import React, {Component, ChangeEvent, FormEvent} from "react"
interface State {
    id: string
    name: string
    price: number
    quantity: number
}
class Form extends Component<{}, State> {
    state: Readonly<State> = {
        id: "",
        name: "",
        price: 0,
        quantity: 0
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        this.setState({[name]: name === "price" || name === "quantity" ? Number(value) : value} as Pick<State, keyof State>)
    }
    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(this.state)
    }
    render(): React.ReactNode {
        return (
            <form action="">
                <h2>Thêm mới sản phẩm</h2>
                <label htmlFor="id">Mã sản phẩm</label>
                <input type="text" id="id" name="id" value={this.state.id} onChange={this.handleChange} />
                <label htmlFor="name">Tên sản phẩm</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                <label htmlFor="price">Giá</label>
                <input type="number" id="price" name="price" value={this.state.price} onChange={this.handleChange} />
                <label htmlFor="quantity">Số lượng</label>
                <input type="number" id="quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange} /><br />
                <button type="submit" onClick={this.handleSubmit}>Đăng kí</button>
            </form>
        )
    }
}
export default Form