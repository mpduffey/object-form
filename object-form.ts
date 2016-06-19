import {Component, Input, ChangeDetectionStrategy, AfterContentInit} from '@angular/core';
import {ObjectService} from 'services/objects.service';

@Component({
	selector:					'object-form',
	template:					`
		<button class="btn btn-mini" (click)="print(object)">Print</button>
		<ul>
			<li *ngFor="let key of arrayOfKeys">{{key}}: 
				<div class="float-right">
					<input type="text" [(ngModel)]="object[key]"/>
					<i class="fa fa-times fa-lg red-text pointer block-icon" aria-hidden="true"></i>
				</div>
			</li>
			<li><input type="text" #newKey/>:  
				<div class="float-right"><input type="text" style="margin-right: 3px;" #newValue/><i class="fa fa-plus fa-lg block-icon" (click)="addProperty(newKey, newValue)"></i></div>
			</li>
		</ul>
	`,
	styles:	[`
		li {
			margin:				0;
			height:				21px;
		}
	`]
})

export class ObjectForm implements AfterContentInit {
	@Input() object: any;
 
	constructor(private _objectService: ObjectService) {}
	ngAfterContentInit() {
		this.arrayOfKeys = Object.keys(this.object);
	}
	
	addProperty = (newKey, newValue) => {
		console.log(newKey.value + ": " + newValue.value);
		if(!this.object.hasOwnProperty(newKey.value)) {
			this.object[newKey.value] = newValue.value;
			this.arrayOfKeys = Object.keys(this.object);
			newKey.value = null;
			newValue.value = null;
		} else {
			console.log("Propety '" + newKey + "' already exists.");
		}
	}
	print = (x) => {
		console.log(x);
	}
}