import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss']
})
export class HtmlEditorComponent {
@ViewChild('contentEditor',{static:true})contentEditor:ElementRef | undefined;
@Output() sendHtmlContent = new EventEmitter();
@Input() public htmlContent:any="";
fontSize:string='';

editorSelection:Range|null=null;

  constructor(@Inject(DOCUMENT) private doc: any,public sanitizer:DomSanitizer) {
  
  }

  ngAfterContentInit()
  {
    this.htmlContent= this.sanitizer.bypassSecurityTrustHtml(this.htmlContent);
  }

  setTextFormatting(textformat:string)
  {    
    switch (textformat) {

      case 'bold':
        this.doc.execCommand('bold',false,null)  ; 
        break;

      case 'italic':

        this.doc.execCommand('italic',false,null)  ; 
        break;

      case 'underline':
        this.doc.execCommand('underline',false,null)  ; 
        break;

      case 'leftAlign':
        this.doc.execCommand('justifyLeft',false,null)  ; 
        break;

      case 'centerAlign':
        this.doc.execCommand('justifyCenter',false,null)  ; 
        break;

      case 'rightAlign':
        this.doc.execCommand('justifyRight',false,null)  ; 
        break;

      case 'fontSize':
        this.doc.execCommand('justifyRight',false,null)  ; 
        break;


      default:
        break;
    }
      
  }

  setFontSize(fontsize:string)
  {
      if (this.editorSelection) {
        
          const sel = this.doc.getSelection();
          sel.removeAllRanges();
          sel.addRange(this.editorSelection);
          this.doc.execCommand('fontSize', false, fontsize);
          this.sendHtmlContentValue(this.contentEditor!.nativeElement); 
      } 
  }

  saveSelectedText()
  {
    if (this.contentEditor?.nativeElement.getSelection()) {
      const selection = this.contentEditor.nativeElement.getSelection();
      if (selection.getRangeAt) {
        this.editorSelection = selection.getRangeAt(0);
      } 
    } else {
      this.editorSelection = null;
    }

  }

  addLink(link:string)
  {
    this.doc.execCommand('insertHTML',false,link);
    this.sendHtmlContentValue(this.contentEditor!.nativeElement);
  }

  addUrl()
  {
    let url:string|null='';
    url=prompt('Add the Url',url);

    if (url!=null) {
      this.doc.execCommand('createlink',false,url);
    }
    
  }
  
  setColor(color:string)
  {
    this.doc.execCommand('foreColor',false,color);
    this.sendHtmlContentValue(this.contentEditor!.nativeElement);
  }

  pasteEvent(event:ClipboardEvent)
  {
    event.preventDefault();
    const text=event.clipboardData?.getData('text/html');
    this.doc.execCommand('insertHTML',false,text);
    return text;
  }
  
  sendHtmlContentValue(element:HTMLElement)
  {
    let htmlContent1:string=element.innerHTML;
    this.sendHtmlContent.emit(htmlContent1);
  }

  onEditorChanged(event:any)
  {
     this.sendHtmlContentValue(this.contentEditor!.nativeElement);
  }

  fontSizeList:any[]=[
    {
      text:'1',
      value:'1'
    },
    {
      text:'2',
      value:'2'
    },
    {
      text:'3',
      value:'3'
    },
    {
      text:'4',
      value:'4'
    },
    {
      text:'5',
      value:'5'
    },
    {
      text:'6',
      value:'6'
    },
    {
      text:'7',
      value:'7'
    }
  ]
  
}
