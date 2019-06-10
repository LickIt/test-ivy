import { Component, Input } from '@angular/core';

abstract class BaseComponent {
    @Input()
    public test: string;
}

@Component({
    selector: 'app-test',
    template: `title: {{ test }}`
})
export class TestComponent extends BaseComponent {}
