import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



class Partner {
  name: string;
  adress: any;
}

class Vertrag {

}

class Police {

}

abstract class SearchItem {

  id: string;
  type: string;
  item: string;
  detail: any;

}




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SearchModule { }
