import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-format-html',
  templateUrl: './format-html.component.html'
})
export class FormatHtmlComponent {
  form: FormGroup = this.fb.group({
    html: new FormControl(''),
    matQuillHtml: new FormControl('')
  })

  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) {}

  ngOnInit() {
  }

  byPassHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }
}
