import React, {useState} from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0
        }
    }


    render() {
        const handlerClick = () => {
            this.setState({currentValue: this.state.currentValue + 1});
        }


        return (
            <button onClick={handlerClick}>{this.state.currentValue}</button>
        );
    }
}

function Button(props) {
    const [btText, setNextText] = useState("Клік");
    const [btColor, setNextColor] = useState("yellow");
    const startClick = () => {
setNextText("Наступний текст");
setNextColor("red");
    }
    return (
        <>
            <button style={{backgroundColor: btColor}} onClick={startClick}>{btText}</button>
            <Counter/>
        </>
    );
}

export default Button