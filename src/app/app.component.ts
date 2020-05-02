import { Component } from '@angular/core';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'version-nine'; 
  public get environmentName() {
    return environment.environment;
  }
  ngOnInit(): void { 
    console.log(this.environmentName)
  }  
}
