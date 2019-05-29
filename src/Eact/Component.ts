export type Key = string | number;

export type Attributes = { key?: Key; }

export type VDOM<VDOM_Props> = {
    tag: string,
    props: VDOM_Props,
    children: (VDOM<any> | Component<any>)[]
}

export class Component<Props = {}, S = {}> {
    props: Props;
    state: S;

    setState(newState: Partial<S>) {
        // 覆盖 state
        Object.keys(newState).forEach(key => {
            this.state[key] = newState[key];
        });
        // 重绘
        this.reRender();
    }

    onStateChange: Function;
    reRender() {
        if (this.onStateChange) this.onStateChange();
    }

    constructor(props: Props) {
        this.state = {} as S;
        this.props = props as Props;
    }

    render(): Node<any> {
        return null;
    }

    static isComponent(e: Element<any>): e is Component<any> {
        // @ts-ignore
        if (e.state && e.render) {
            return true;
        } else {
            return false;
        }
    }
}

export type Node<NodeProps = {}> = null | string | Element<NodeProps>;

export type Element<ElementP> = Component<ElementP> | VDOM<ElementP>;
