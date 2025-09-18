import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NeedBar {
  name: string;
  value: number;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class NeedBarsService {
  private defaultNeeds: NeedBar[] = [
    { name: 'Hunger', value: 50, color: '#FF6B6B' },
    { name: 'Energy', value: 50, color: '#4ECDC4' },
    { name: 'Social', value: 50, color: '#45B7D1' },
    { name: 'Hygiene', value: 50, color: '#96CEB4' },
    { name: 'Bladder', value: 50, color: '#FFEAA7' },
    { name: 'Fun', value: 50, color: '#DDA0DD' },
    { name: 'Comfort', value: 50, color: '#98D8C8' },
    { name: 'Room', value: 50, color: '#F7DC6F' }
  ];

  private needsSubject = new BehaviorSubject<NeedBar[]>(this.defaultNeeds);
  public needs$ = this.needsSubject.asObservable();

  constructor() { }

  updateNeed(index: number, value: number) {
    const currentNeeds = this.needsSubject.value;
    const updatedNeeds = [...currentNeeds];
    updatedNeeds[index] = { ...updatedNeeds[index], value };
    this.needsSubject.next(updatedNeeds);
  }

  setNeeds(needs: NeedBar[]) {
    this.needsSubject.next(needs);
  }

  getNeeds(): NeedBar[] {
    return this.needsSubject.value;
  }

  encodeNeedsToUrl(): string {
    const needs = this.getNeeds();
    const values = needs.map(need => need.value);
    return btoa(JSON.stringify(values));
  }

  decodeNeedsFromUrl(encoded: string): boolean {
    try {
      const decoded = atob(encoded);
      const values = JSON.parse(decoded);
      if (Array.isArray(values) && values.length === this.defaultNeeds.length) {
        const needs = this.defaultNeeds.map((need, index) => ({
          ...need,
          value: Math.max(0, Math.min(100, values[index] || 50))
        }));
        this.setNeeds(needs);
        return true;
      }
    } catch (error) {
      console.error('Failed to decode needs from URL:', error);
    }
    return false;
  }

  resetToDefault() {
    this.needsSubject.next([...this.defaultNeeds]);
  }
}
