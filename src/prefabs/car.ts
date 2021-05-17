import {html} from 'lit-html';

let tires = [
    "-1 0  1",
    " 1 0  1",
    "-1 0 -1",
    " 1 0 -1",
]

export const car = html`

    <a-box wasd-controls color="tomato" depth="4" height="3" width="2">

        ${tires.map( (i) => html`
            <a-cylinder position="${i}" rotation=" 0 0 90"color="black" height=".5" radius=".7"></a-cylinder>
        
        `)}

    </a-box>
`;