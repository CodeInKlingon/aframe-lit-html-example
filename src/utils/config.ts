import { TemplateResult } from "lit-html";
import { scene1 } from "../scenes/scene1";

class GameConfig{
	
	defaultScene = scene1;
	prefabs: [] = [];

	Prefab = function(template: TemplateResult){
		let indexOf = this.prefabs.indexOf(template);
		if( indexOf == -1){
			let index = this.prefabs.push(template) - 1; 
			return index;
		}else{
			return indexOf;
		}
	}
}

export const Config = new GameConfig();