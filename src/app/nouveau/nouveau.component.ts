import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {

  titre: string = 'mon titre';
  date: string = 'date';
  color: string = 'red';

  public content: string = '';
  public customizedColor: string = '';
  public display: boolean = false;

  public users: Array<{nom}> = [];
  constructor(){
    this.users.push({nom: "Sébastien"});
    this.users.push({nom: "Vincent"});
    this.users.push({nom: "Johanna"});
    this.users.push({nom: "Clément"});
  }
  trackById(index, item) { return item.id; }

  changeColor(newColor: string) : void {
    this.color = newColor;
    this.users.push({nom: "Qinaya"});
  }

  square(nbr: number) : number {
    return nbr * nbr;
  }

  public myDivStyles = {};

  setMyDivStyles() {
    this.myDivStyles = {
      'background-color': !this.display ? 'black' : 'green',
      'height': '100px',
      'width': '100px'
    };
  }

  ngOnInit() {
    this.setMyDivStyles();
  }

  /*
  <!--(input)="catchInput($event)"-->
  catchInput(event: Event) {
    this.content=(<HTMLInputElement>event.target).value;
  }
  */

}
