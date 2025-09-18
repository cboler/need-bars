import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NeedBarsService, NeedBar } from '../need-bars';

@Component({
  selector: 'app-need-bars-display',
  imports: [CommonModule],
  templateUrl: './need-bars-display.html',
  styleUrl: './need-bars-display.css'
})
export class NeedBarsDisplayComponent implements OnInit {
  needs: NeedBar[] = [];
  shareUrl: string = '';

  constructor(
    private needBarsService: NeedBarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Check if we have encoded data in the route
    this.route.params.subscribe(params => {
      if (params['data']) {
        const decoded = this.needBarsService.decodeNeedsFromUrl(params['data']);
        if (!decoded) {
          // If decoding fails, redirect to config
          this.router.navigate(['/config']);
          return;
        }
        this.shareUrl = window.location.href;
      }
    });

    this.needBarsService.needs$.subscribe(needs => {
      this.needs = needs;
    });
  }

  goToConfig() {
    this.router.navigate(['/config']);
  }

  copyToClipboard() {
    if (this.shareUrl) {
      navigator.clipboard.writeText(this.shareUrl).then(() => {
        alert('Share URL copied to clipboard!');
      });
    } else {
      const encoded = this.needBarsService.encodeNeedsToUrl();
      const url = `${window.location.origin}${window.location.pathname}#/display/${encoded}`;
      navigator.clipboard.writeText(url).then(() => {
        alert('Share URL copied to clipboard!');
      });
    }
  }

  generateShareUrl() {
    const encoded = this.needBarsService.encodeNeedsToUrl();
    this.router.navigate(['/display', encoded]);
  }

  getNeedIcon(needName: string): string {
    const icons: { [key: string]: string } = {
      'Hunger': '🍽️',
      'Energy': '⚡',
      'Social': '👥',
      'Hygiene': '🚿',
      'Bladder': '🚽',
      'Fun': '🎮',
      'Comfort': '🛋️',
      'Room': '🏠'
    };
    return icons[needName] || '📊';
  }
}
