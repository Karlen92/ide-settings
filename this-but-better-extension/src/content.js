import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";

class Main extends React.Component {
    state = {
        currentElem: null
    };

    componentDidMount() {
        document.addEventListener('click', elem => {
            this.setState({ currentElem: elem.target });
            console.log('@@@@ Selected Elem::::', elem.target);
        })
    }
    render() {
        return (
            <div className={'my-extension'}>
                <h1>Selected Elem::::: {`${this.state.currentElem}`}</h1>
            </div>
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);