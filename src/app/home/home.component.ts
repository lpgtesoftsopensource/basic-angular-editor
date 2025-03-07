import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HtmlEditorComponent } from 'ngx-basic-editor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  htmlContent :any= '';
  @ViewChild('editor1',{static:true})editor1:HtmlEditorComponent | undefined;  

  constructor(@Inject(DOCUMENT) private doc: any,public sanitizer:DomSanitizer) {
  
  }
  
  ngAfterContentInit()
  {
    //Set the content of the editor
    this.editor1!.htmlContent='<div style="text-align: center;"><b>Title Sample</b></div><div><br></div><div>Text Sample ..</div>';
  }

  setHtmlContentValue(htmlContent1:any) 
  {
    //Get the content in the editor
    this.htmlContent= htmlContent1;
    //Process the content in the editor
    console.log(this.htmlContent);
  }

  left(){
 
    const scrollItems = document.querySelector(".containerScrollItems") as HTMLElement;
    const scrollLength = scrollItems.scrollWidth - scrollItems.clientWidth;
    scrollItems.scrollBy({
      left: -50,
      behavior: "smooth"
    });
  
  }
  
  right(){
  
      const scrollItems = document.querySelector(".containerScrollItems") as HTMLElement;
      const scrollLength = scrollItems.scrollWidth - scrollItems.clientWidth;

      scrollItems.scrollBy({
        left: 50,
        behavior: "smooth"
      });
  
  }
  

}
