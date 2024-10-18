import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() stars : number = 0;
  starsArray: any[] = [];

  ngOnInit(): void {
    if (this.stars > 5) {
      this.stars = 5;
    }

    const fullStars = Math.floor(this.stars) // floor zaniża liczby po przecinku. (4.6 to 4)
    const halfStars = this.stars % 1 !== 0;

    this.starsArray= Array(fullStars).fill(1)

    if(halfStars){
      this.starsArray.push(2)
    }
    if(this.stars < 5){
      const emptyStars = 5 - Math.ceil(this.stars);
      this.starsArray = this.starsArray.concat(Array(emptyStars).fill(0)); // ceil zawyża liczby po przecinku. (4.1 to 5)
    }
  }
}
