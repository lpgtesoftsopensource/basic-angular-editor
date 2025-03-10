# basic-angular-editor
**Basic Editor**

Basic Angular Editor easy to be integrated

> A simple Basic Angular Editor.
> Can be easly integrated

### Installation

How to install the component:

```bash
npm install basic-editor
# or
yarn add basic-editor
```

### Usage

**Integration in a project**

Import `ngx-basic-editor` module

```ts
import { NgxBasicEditorModule } from 'ngx-basic-editor';

@NgModule({
  imports: [NgxBasicEditorModule],
})
export class AppModule {}
```

In the html component

```ts

<app-html-editor #editor1 (sendHtmlContent)="setHtmlContentValue($event)" ></app-html-editor> 

```

In the Type script component

```ts

export class HomeComponent {
  htmlContent :any= '';
  @ViewChild('editor1',{static:true})editor1:HtmlEditorComponent | undefined;  

  constructor() {
  
  }
   
  ngAfterContentInit()
  {
    this.editor1!.htmlContent='<div style="text-align: center;"><b>Title Sample</b></div><div><br></div><div>Text Sample ..</div>';
  }

  setHtmlEditorContentValue() 
  {
    let htmlelement:HTMLElement= this.editor1?.contentEditor?.nativeElement;
    this.htmlContent=htmlelement.innerHTML;
  }
  
   onSubmit(): void {
   
    this.setHtmlEditorContentValue();
    this.work.content=this.htmlContent;
   
   }
  
}

```


