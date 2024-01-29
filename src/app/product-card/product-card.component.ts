import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MyProducts } from '../interfaces/my-products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardModule , ButtonModule ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() currentproduct!: MyProducts 

}


/*

import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [ ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() currentTask: any

  @Output() sendToParent = new EventEmitter<string>()

  deleteTask(id : string){
    console.log("IN CHILD" , id)
    this.sendToParent.emit(id)
  }}


*/