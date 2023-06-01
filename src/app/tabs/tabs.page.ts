import { Component } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  //translate
  language:any
  
  constructor(private translateConfigService: TranslateConfigService, private translate: TranslateService) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getCurrentLang();
  }
}
