import {html} from 'lit-html';

export const cameraRig = html`<a-entity 
                light="type:directional;
                color:#fdffeb;
                intensity:1.6;
                castShadow:true; 
                shadowCameraLeft: -15;
                shadowCameraBottom: -15;
                shadowCameraRight: 15;
                shadowCameraTop: 15;
                shadowMapHeight: 2048;
                shadowMapWidth: 2048; 	
                target:#directionaltarget"
                position="5 10 5" 
            ></a-entity>
            <a-entity id="directionaltarget" position="0 0 0"></a-entity>

            <a-entity 
                id="rig" 
                position="0 0 0"
                rotation="-50 0 0"
            >
                <a-camera 
                    id="camera" 
                    wasd-controls-enabled="false"
                    look-controls-enabled="false"
                    fov="14"
                    position="0 0 46"
                ></a-camera>
            </a-entity>`;