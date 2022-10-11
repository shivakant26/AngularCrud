import { Component } from '@angular/core';
import { model } from 'src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curdangular';
  model = { wish : "", id:undefined}
  data : any = [];
  index : any = undefined
  constructor() {
    
  }
  ngOnInit():void{

  }
  Editwish(i:any){
    let current_obj = this.data[i];
    this.model = {
      wish:current_obj.wish,
      id:i
    }
  }
  deletewish(i:number){
    this.data.splice(i,1);
  }

  add(){
    let obj = this.model;
    if(this.model.id){
      this.data.splice(this.model.id , 1 , obj)
    }else{
    this.data.push(obj)
    }
    this.model={wish:"",id:undefined}
  }
}
