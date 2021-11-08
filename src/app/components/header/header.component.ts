import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class header {
    constructor(){
        console.log('header s ready');
    }
}