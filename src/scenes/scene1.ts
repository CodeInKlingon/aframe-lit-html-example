import {html} from 'lit-html';

import { Config } from '../utils/config';

import { car } from '../prefabs/car';
import { cameraRig } from '../prefabs/cameraRig';

export const scene1 = () => html`
    <!-- Ground -->
    <a-box shadow position="0 -0.5 0" scale="20 1 20" color="#7b8f80" width="3" height="1" depth="1" ammo-body="type: static; collisionFilterGroup: 1; collisionFilterMask: 1;" ammo-shape="type: box"></a-box>
    
    <!-- Sky and ambient light -->
    <a-sky color="#94f6ff"></a-sky>
    <a-entity light="type: hemisphere; color:#154354; groundColor:#7b8f80;"></a-entity>

    <!-- camera and car prefabs -->
    <a-prefab shadow position="0 0.7 -7" prefab="${Config.Prefab(car)}" ></a-prefab>
    <a-prefab position="0 0 -7" prefab="${Config.Prefab(cameraRig)}" ></a-prefab>
        
`;