import { Component } from '@angular/core';
import { CharacterHp } from './models/character-hp.model';
import { Character } from './models/character.model';
import { Player } from './models/player.model';
import { Product } from './models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(){
      this.basicTypes();
      this.arraysAndObjects();
      this.isStatement();
      this.switchStatement();
      this.whileStatement();
      this.forStatement();
      this.basicFunctions();
      this.forStatementInterface();
      this.otherFunctions();
      this.basicDestructuring();
      this.arrayDestructuring();
      this.argumentDestructurin();
    }

    basicTypes(){
      const VIDEO_GAME : string = 'Super Smash Bros.Ultimate';
      console.log(VIDEO_GAME);

      let characterName : string = 'Waluigi';
      console.log(characterName);

      let hp : number = 0;
      console.log(hp);

      let status : boolean;
      status = (hp <= 0) ? false : true;
      console.log(status);
    
      //alt+96
      const STATUS : string = `Game: ${VIDEO_GAME}
      character: ${characterName}
      hp: ${hp}
      status: ${status}`;

      console.log(STATUS);
    }

    arraysAndObjects(){
      let SKILLS : string[] = ['punch', 'kick', 'damage', 'special mov'];
      console.log(SKILLS);

      const character: Character = {
        name : 'Waluigi',
        healthPoints : 100,
        live : true,
        skills : SKILLS
      }

      character.name = 'Mario';
      character.color = 'blue';

      console.log(character);

    }

    isStatement(){
      let x : number = 20, y : number = 20;

      if(x > y){
        console.log('x es mayor a y');
      } 
      else if (x < y ) {
        console.log('x es menor a y');
      }
      else if (x == y ) {
        console.log('x es menor a y');
      }
      else {
        console.log('ninguna se cumple');
      }
    }

    switchStatement(){
     let a : number = 20, b : number = 8 ;

     switch(a-b){

      case 0:
        console.log('Resultado es 0');
        break;

      case 5:
        console.log('Resultado es 5');
        break;

      case 10:
        console.log('Resultado es 10');
        break;
      
      default:
        this.printNumber(a-b);
        console.log('Result: NaN');
        break;
     }
    }

    printNumber(value : number){
      console.log('value');

    }

    whileStatement(){
      let counter : number = 0;
      while(counter <= 5){
        console.log('Ejecucion numero ' + counter);
        counter++;
        
      }

      let i : number = 1;
      do{
        console.log('do Ejecucion numero ' + i);
        i++;

      } while( i <= 5)
    }


    forStatement(){
      let array : number[] = [10,20,30,40,50,60,70,80,90];
      for(const INDEX in array){
        console.log(INDEX);
        console.log(array[INDEX]);
      }

      console.log('---------------------------');

      for(let i: number = 0; i < array.length;i += 1){
        console.log(i);
        console.log(array[i]);
      }

      console.log('---------------------------');

      array.forEach(function(value, index){
        if(value == 50){
          console.log(value);
          console.log(index);
        }
      });

      array.forEach(value => {  
        console.log(value);
      });
      
    }

    tryCatchStatement(){
      try{
        throw "Se presento un error";
      }
      catch(e){
        console.log(e);
      }
    }

    basicFunctions(){
      function sumNumbers(a:number, b: number):number{
        return a+b;
      }
      console.log(sumNumbers(2,5));

      const ARROW_NUM = (a: number, b:number) : number => {return a+b}
      console.log(ARROW_NUM(1,8));

      function multiplyNumbers(a: number, b:number, c?: number) : number {
        return a * b * (c ?? 1);
      }
      console.log(multiplyNumbers(2, 2));
      console.log(multiplyNumbers(2, 2, 3));

      const RESULT : number = multiplyNumbers(2,5);
      console.log(RESULT);

      function printNumber(a: number) : void {
        console.log(a);
      }
      printNumber(8);


    }

    forStatementInterface(){
      let character : Character[] = [
        {
          name : 'Mario',
          live : true,
          healthPoints : 100,
          skills : []
        },
        {
          name : 'Luigi',
          live : true,
          healthPoints : 100,
          skills : [],
          color : 'green'
        },
        {
          name : 'Bowser',
          live : true,
          healthPoints : 100,
          skills : []
        }
      ];
     
      character.forEach(function (value){
        console.log(value);
      });

      
    }

    healCharacter(character : CharacterHp){
      character.healthPoints = 100;
    }

    otherFunctions(){
      let character : CharacterHp = 
        {
          name : 'Mario',
          live : true,
          healthPoints : 50,
          skills : ['punch','kick','damage','special mov'],
          color: 'Rojo',
          showHP(){
            console.log('Puntos de vida: ' + this.healthPoints);
          }
        };
        character.showHP();
        this.healCharacter(character);
        character.showHP();
    }

    //ejemplo destructuracion
    basicDestructuring(){
      const CURRENT_SONG : Player = {
        volume : 90,
        second : 36,
        name : 'La Cucaracha',
        detail : {
          author : 'Fernan Caballero',
          year : 1818
        }
      }

      const { volume, second,name } = CURRENT_SONG;
      //const {author : detailAuthor} = detail;
      //const { author } = detail
      console.log('El volumen es de: ',volume);
      console.log('El volumen es de: ',second);
      console.log('El volumen es de: ',name);
      console.log('El volumen es de: ',CURRENT_SONG.detail.author);
    }

    //ejemploDestructuracion Array

    arrayDestructuring(){
      const AVENGERS : string[] = ['Capitan America', 'Iron man', 'Viuda Negra','Thor','Hulk'];
      const [, , ,p3 ] = AVENGERS;

      console.log('El primer Avenger es: ' + AVENGERS[0]);
      console.log('El segundo Avenger es: ' + AVENGERS[1]);
      console.log('El tercer Avenger es: ' + AVENGERS[2]);
      console.log('El cuarto Avenger es: ' + p3);
      console.log('El quinto Avenger es: ' + AVENGERS[4]);
    }

    argumentDestructurin(){
      const phone : Product = {
        description : 'Iphone 14 Pro Max',
        price: 59999
      }

      const tablet : Product = {
        description : 'Galaxy Tab S8 Ultra',
        price: 24999
      }

      /*function calcTaxes(products : Product[] : [number, number]){
        let total = 0;

        products.forEach(product => {
          total += product.price
        })

        return [total,total*1.16];
      }*/

      const CAR_ITEMS : Product[] = [phone,tablet];
      console.log(CAR_ITEMS);

      //const [cartPrice , carTaxes] = this.calcTaxes[CAR_ITEMS];
      //console.log(cartPrice);
      //console.log(carTaxes);

    }
}
