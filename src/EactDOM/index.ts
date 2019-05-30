import * as Eact from "../Eact/Component";

function renderNode(node: Eact.Node): HTMLElement | null | Text {
    if (node === null) {
        return null;
    } else if (typeof node === 'string') {
        return document.createTextNode(node);
    } else if (Eact.Component.isComponent(node)) {
        return renderComponent(node);
    } else {
        const $elem = document.createElement(node.tag.toUpperCase());

        Object.keys(node.props || {}).forEach(propsKey => {
            const val = node.props[propsKey];

            if (propsKey === 'onClick') {
                $elem.addEventListener('click', val);
            }
        });
        
        Object.assign($elem, node.props);

        node.children.forEach(subNode => {
            if (Eact.Component.isComponent(subNode)) {
                const $node = renderComponent(subNode);
                if ($node) {
                    $elem.appendChild($node);
                    subNode.componentDidMount();
                }
            } else {
                const $node = renderNode(subNode);
                if ($node) $elem.appendChild($node);
            }
        });


        return $elem;
    }
}

function renderComponent(compo: Eact.Component<any>): HTMLElement | null | Text {
    const eactNode = compo.render();
    // console.log('compo', compo, compo.render);
    const $dom = renderNode(eactNode);

    compo.onStateChange = () => {
        // console.log('state change', compo.state);
        const $nextDom = renderComponent(compo);
        if ($dom && $nextDom) {
            $dom.replaceWith($nextDom);
        }
    }

    return $dom;
}

export function render(elem: Eact.Element<any>, targetDom: HTMLElement) {
    const dom = Eact.Component.isComponent(elem) ? 
        renderComponent(elem) : 
        renderNode(elem);
    
    if (dom) {
        targetDom.replaceWith(dom);
        Eact.Component.isComponent(elem) && elem.componentDidMount();
    }
}


