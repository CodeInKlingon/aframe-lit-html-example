import {Config} from "../../utils/config";
import {render, html, } from 'lit-html';

AFRAME.registerComponent('prefab-loader', {

    schema: {
        prefab:{}
    },

    init: function () {
        render( Config.prefabs[this.data.prefab], this.el);
    }

});