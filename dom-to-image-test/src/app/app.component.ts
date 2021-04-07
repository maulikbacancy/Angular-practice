import { Component, ElementRef, ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dom-to-image-test';

  @ViewChild('screen')screen: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  public onDownload(): void {
    domtoimage.toPng(this.screen.nativeElement).then(res => {
      this.downloadLink.nativeElement.href = res;
      this.downloadLink.nativeElement.download = 'maulik.png';
      this.downloadLink.nativeElement.click();
    }) 
  }


}
