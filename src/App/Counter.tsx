import * as Eact from "../Eact";

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

    componentDidMount() {
        console.log('Mounted');
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
