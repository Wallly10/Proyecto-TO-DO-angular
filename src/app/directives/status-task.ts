import { Directive, ElementRef, input, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusTask]',
  standalone: true
})
export class StatusTask {

  constructor(private el: ElementRef , private renderer: Renderer2) { }

  @Input('appStatusTask') set appStatusTask(completado: boolean){
    if (!completado) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red')
    }else{
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green')
    }
  }

}
