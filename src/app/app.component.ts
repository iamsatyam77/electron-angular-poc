import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'electron-angular-poc';

  constructor(private electronService: ElectronService) {}

  ngOnInit() {
    debugger
    this.electronService.isElectronApp
      ? (this.title = 'Angular running in electron')
      : (this.title = 'Angular running in browser');
  }
}
