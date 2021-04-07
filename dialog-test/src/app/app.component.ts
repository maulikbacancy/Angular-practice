import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog-test';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog implements AfterViewInit {

  @ViewChild('screen')screen: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  public context: CanvasRenderingContext2D;
  public dataUrl: any;
  

  downloadImage(){
    
    let tempImg = document.createElement('img');

    let source = `
        <div xmlns="http://www.w3.org/1999/xhtml" style="background-color:white;padding:20px;">
          <h1>Dialog with elements</h1>
          <p>This dialog showcases the title, close, content and actions elements.</p>
          <button>close</button>
        </div>`
    
    let data = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">' +
           '<foreignObject width="100%" height="100%">' +
           source +
           '</foreignObject>' +
           '</svg>';
    
    data = encodeURIComponent(data);
    
    tempImg.src = 'data:image/svg+xml,' + data;
    console.log(tempImg.src);
    
    
    tempImg.onload = () => {
      this.context.drawImage(tempImg,0,0);
      this.dataUrl = this.canvas.nativeElement.toDataURL("image/png", 1.0);
      this.downloadLink.nativeElement.href = this.dataUrl;
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    }
    
    
    
  }

  

  ngAfterViewInit(): void {
    this.canvas.nativeElement.height = 500;
    this.canvas.nativeElement.width = 500;
    this.context = this.canvas.nativeElement.getContext('2d');
  }

}