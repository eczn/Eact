import * as Eact from "./Eact";
import * as EactDOM from "./EactDOM";
import { App } from "./App";

// Mount 
const $app = document.getElementById('app') as HTMLElement;
EactDOM.render(<App />, $app)
