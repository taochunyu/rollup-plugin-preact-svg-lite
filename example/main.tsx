import Logo                     from "./logo.svg";
import {FunctionalComponent, h, render} from "preact";

export const App: FunctionalComponent = () => (
    <Logo/>
);

const root = document.querySelector("#root") as HTMLDivElement;

render(<App />, root);
