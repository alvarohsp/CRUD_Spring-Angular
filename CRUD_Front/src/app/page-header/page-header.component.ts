import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public redirecionar(url: string): void {
    this.router.navigate([url]);
  }
}
