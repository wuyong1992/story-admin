import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * 注册svg图标
 * @param {MatIconRegistry} iconRegistry
 * @param {DomSanitizer} sanitizer
 */
export const loadSvgResource = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
  iconRegistry.addSvgIcon('article', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/article.svg'));
};
