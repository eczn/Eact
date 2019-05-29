import { Component, Element } from "./Component";

export * from "./Component";

type ClassType<CTP> = (new (props: CTP) => Component<CTP>);

export function createElement<TheProps>(tag: string | ClassType<TheProps>, props: TheProps, ...children: Element<any>[]) {
    let $component;
    if (typeof tag === 'string') {
        return {
            tag, props, children
        }
    } else {
        $component = new tag(props)
    }

    return $component;
}
