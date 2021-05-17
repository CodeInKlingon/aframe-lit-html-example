import {Config} from "../../utils/config";
import {render} from 'lit-html';

AFRAME.registerComponent('load-default-scene', {

    init: function () {
        var sceneEl = this.el;
        var sceneContainer = document.createElement("a-entity");
        render(Config.defaultScene(), sceneContainer);
        sceneContainer.childNodes.forEach(element => {
            sceneEl.appendChild(element) 
        });
    }

});