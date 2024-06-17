import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeIndexListComponent } from '../home-index-list/home-index-list.component';

@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [CommonModule, HomeIndexListComponent],
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.css'
})
export class HomeIndexComponent {

}
