import { Component } from '@angular/core';
import $ from 'jquery'

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css'
})
export class MainSidebarComponent {

  public  ngOnInit() {
    this.OnSelected_Menu('LiDashBoard', 'Null');
  }
  
  public ngOnChanges() {
  }

  public ngDoCheck() {
  }
  
  public ngAfterContentInit() {
  }

  public ngAfterContentChecked() {
  }

  public ngAfterViewInit() {
  }

  public ngAfterViewChecked() {
  }

  public ngOnDestroy() {
  }

  OnSelected_Menu (LiParent: string, LiChild:string) {
    $("li").removeClass("active menu-open");
    
    if (LiParent != "Null") {
      $("#" + LiParent + "").addClass("active menu-open");
    }
    
    if (LiChild != "Null") {
      $("#" + LiChild + "").addClass("active");
    }
  }
}

//npm install --save jquery
//npm install -D @types/jquery