import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxUiLoaderModule,NgxUiLoaderHttpModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularBasics';
}
