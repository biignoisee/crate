import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Navbar from '@layout/navbar/navbar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-layout.html',
})
export default class MainLayout { }
