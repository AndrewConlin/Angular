import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent  {
   title = 'Customer App';
   name = 'Andrew';
   andrewsColor = 'red';

   changeColor() {
      this.andrewsColor = this.andrewsColor === 'blue' ? 'red' : 'blue';
   }
}
