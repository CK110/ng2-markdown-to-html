import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MarkdownToHtmlComponent } from './markdown-to-html.component';
import { MarkdownToHtmlService } from './markdown-to-html.service';

@NgModule({
  exports: [MarkdownToHtmlComponent],
  imports: [HttpModule],
  declarations: [MarkdownToHtmlComponent],
  providers: [MarkdownToHtmlService],
})
export class MarkdownToHtmlModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MarkdownToHtmlModule,
    };
  }
}
