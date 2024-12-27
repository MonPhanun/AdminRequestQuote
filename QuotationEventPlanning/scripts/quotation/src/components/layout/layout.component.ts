import { Component } from "@angular/core";

@Component({
    selector: 'layout-component',
    templateUrl: '../../templates/quotation/layout/index.html',
})

export class layoutComponent {

    colapesSidebar = false;

    colapes(clp: boolean) {
        this.colapesSidebar = clp;
    }
}