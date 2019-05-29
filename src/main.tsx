import * as Eact from "./Eact";
import * as EactDOM from "./EactDOM";

type CounterProps = {
    init: number
}

type CounterState = {
    count: number
}

export class Counter extends Eact.Component<CounterProps, CounterState> {

    constructor(p: CounterProps) {
        super(p);

        console.log('counter init', p);
        this.state = {
            count: p.init
        };
    }

    render() {
        return (
            <div>
                <div>{ this.state.count.toString() }</div>

                <button onClick={() => {
                    console.log('这里自加');
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Click Me</button>
            </div>
        );
    }
}

export class App extends Eact.Component<{}> {
    constructor(p: {}) {
        super(p);
    }

    render() {
        return (
            <div>
                <Counter init={100} />
            </div>
        );
    }
}

const $app = document.getElementById('app') as HTMLElement;
EactDOM.render(<App />, $app);
