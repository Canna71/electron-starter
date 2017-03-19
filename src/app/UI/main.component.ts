import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'm-main',
    template: require('./main.component.html'),
    styles: [require('./main.component.less')]
})
export class MainComponent implements OnInit, OnDestroy {

    private sub: Subscription;



    ngOnInit() {
    }

    ngOnDestroy() {
        if(this.sub){
            this.sub.unsubscribe();
        }
    }

}
