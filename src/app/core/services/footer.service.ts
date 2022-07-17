import { Injectable } from '@angular/core';
import { ContainerClassType } from '@models/footer.model';


@Injectable({
  providedIn: 'root'
})
export class FooterService {

  /** Define which bootstrap container class to use. */
  containerClass: ContainerClassType = 'container';
}
