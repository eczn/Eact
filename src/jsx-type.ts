import * as Eact from "./Eact";


type BaseEvents<P> = {
    onClick?(e: any): void,
    children: any
} & P;


declare global {
    namespace JSX {
        // tslint:disable-next-line:no-empty-interface
        // interface Element extends Eact.Element<any> { }
        type Element = Eact.Element<any>;

        interface ElementClass extends Eact.Component<any, any> {
            render(): Eact.Node;
        }

        interface ElementAttributesProperty { props: {}; }

        interface ElementChildrenAttribute { children: {}; }

        

        // tslint:disable-next-line:no-empty-interface
        interface IntrinsicAttributes extends Eact.Attributes { }

        // tslint:disable-next-line:no-empty-interface
        // type IntrinsicClassAttributes<P> = P;

        interface IntrinsicElements {
            // HTML
            a: BaseEvents<{}>;
            p: BaseEvents<{}>;
            blockquote: BaseEvents<{}>;
            button: BaseEvents<{}>;
            div: BaseEvents<{}>;
        }
    }
}