import * as Eact from "../Eact";
import { Counter } from "./Counter";

export type AppState = {
    showCounter: boolean
}

export class App extends Eact.Component<{}, AppState> {
    constructor(p: {}) {
        super(p);

        this.state = {
            showCounter: false
        }
    }

    render() {
        const $counter = this.state.showCounter ? 
            <Counter init={ 100 } /> : 
            null;

        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        showCounter: !this.state.showCounter
                    });
                }}>{
                    this.state.showCounter ?
                        'Close Counter' :
                        'Open Counter'
                }</button>

                { $counter } 
            </div>
        );
    }
}
