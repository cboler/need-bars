import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NeedBarsService, NeedBar } from '../need-bars';

@Component({
  selector: 'app-need-bars-config',
  imports: [CommonModule, FormsModule],
  templateUrl: './need-bars-config.html',
  styleUrl: './need-bars-config.css'
})
export class NeedBarsConfigComponent implements OnInit {
  needs: NeedBar[] = [];

  constructor(
    private needBarsService: NeedBarsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.needBarsService.needs$.subscribe(needs => {
      this.needs = needs;
    });
  }

  onSliderChange(index: number, event: any) {
    const value = parseInt(event.target.value);
    this.needBarsService.updateNeed(index, value);
  }

  shareNeeds() {
    const encoded = this.needBarsService.encodeNeedsToUrl();
    this.router.navigate(['/display', encoded]);
  }

  resetNeeds() {
    this.needBarsService.resetToDefault();
  }

  viewDisplay() {
    this.router.navigate(['/display']);
  }
}
