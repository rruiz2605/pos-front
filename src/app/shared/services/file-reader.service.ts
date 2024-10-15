import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor(private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  read(fileName: string) {
    return this.httpClient.get(fileName, { responseType: 'text' });
  }

  readSVG(fileName: string) {
    return this.read(fileName)
      .pipe(map(res => this.sanitizer.bypassSecurityTrustHtml(res)));
  }
  
  readSVGIcons(fileNames: string[]) {
    return forkJoin(
      fileNames.map(fileName => this.read(`icons/${fileName}.svg`))
    ).pipe(map(res => res.map(r => this.sanitizer.bypassSecurityTrustHtml(r))));
  }
}
