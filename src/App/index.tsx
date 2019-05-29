import * as Eact from "../Eact";
import { Counter } from "./Counter";

export class App extends Eact.Component<{}> {
    constructor(p: {}) {
        super(p);
    }

    render() {
        return (
            <div>
                <p>Hello, Counter</p>
                <Counter init={ 100 } />
            </div>
        );
    }
}
