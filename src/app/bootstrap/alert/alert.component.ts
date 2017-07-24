import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

declare let $;

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    @Input()
    color = 'success';

    @Input()
    close = false;

    @Input()
    timeout = null;

    @ViewChild('divAlert')
    divAlert: ElementRef;

    constructor() {
    }

    ngOnInit() {
        if (this.timeout) {
            setTimeout(() => {
                $(this.divAlert.nativeElement).alert('close');
            }, this.timeout);
        }
    }

}
