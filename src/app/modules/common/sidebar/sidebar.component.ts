import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() childEvent = new EventEmitter<any>();
  @Input() isSidebarActive : boolean = false;
  activeItem : any = null;

  sendDataToParent() {
    this.childEvent.emit(this.isSidebarActive);
  }
  inactiveSidebarClick(){
    this.isSidebarActive = true;
    this.sendDataToParent()
}

}


