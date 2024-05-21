import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'bootsrap';
  isOpen: boolean = true;

  toggleItem() {
    this.isOpen = !this.isOpen;   
  }
  score = 0;
  allDucksFinished = false;
  totalDucks = 5; 
  
  updateScore() {
    this.score++;
    this.checkGameStatus(); // Call checkGameStatus after updating the score
  }
  checkGameStatus() {
    if (this.score >= this.totalDucks) {
      this.allDucksFinished = true;
    }
  }

  isLoading: boolean = false;
  buttonText: string = 'Connect';
  isPowerOff: boolean = true;
  showAnotherClass:boolean=false;

  onClick(): void {
    this.isLoading = true;
    this.buttonText = 'Connecting';
    this.isPowerOff = false;
    
}

load:boolean=false;
word:string='Go';

buttonChanger(){
  this.load=true;
  this.word='';

  setTimeout(() => {
    this.showAnotherClass = true;
    this.word='Success';
}, 5000);
}


showTop: boolean = false;
  showBottom: boolean = false;

  showTopButton() {
    this.showTop = true;
  }

  handleTopButtonClick() {
    // Handle the top button click event
    console.log('Top button clicked');
  }

  handleBottomButtonClick() {
    // Handle the bottom button click event
    console.log('Bottom button clicked');
  }

  resetHover() {
    this.showTop = false;
    this.showBottom = false;
  }

  isToggled = false;

  weatherBackground = 'url(https://i.gifer.com/IJNU.gif)';
  weatherClass = '';


  toggleClimate() {
    this.isToggled = !this.isToggled;
    this.weatherBackground = this.isToggled
      ? 'url(https://i.pinimg.com/originals/1c/22/20/1c222081fa816be48aaf2ff5e4f80a96.gif)'
      : 'url(https://i.gifer.com/IJNU.gif)';
      this.weatherClass = this.isToggled ? 'clip-path-active' : '';
  }
}
