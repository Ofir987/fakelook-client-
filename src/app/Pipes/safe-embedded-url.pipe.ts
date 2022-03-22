import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeEmbeddedUrl'
})
export class SafeEmbeddedUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(imageUrl: string) {
    return this.sanitizer.bypassSecurityTrustStyle(imageUrl);
  }

}
