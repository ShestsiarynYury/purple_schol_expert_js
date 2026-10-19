export class DivComponet { 
    constructor() {
        this.element = document.createElement('div');
    }

    render() {
        return this.element; 
    }
}