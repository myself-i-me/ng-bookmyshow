import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import seatsData from '../../data/seats_data.json'
import { RangePipe } from '../common/range.pipe';

@Component({
  selector: 'app-seat-selection',
  imports: [CommonModule, RangePipe, FormsModule],
  templateUrl: './seat-selection.component.html',
  styleUrl: './seat-selection.component.css'
})
export class SeatSelectionComponent {
  seatsData = seatsData;
  Seats = [ "", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  selectedSeats: string[] = [];
  selectedTicketCount = 0;

  getClass(row:number, column:number):string {
    if(seatsData.bookedSeats.includes(this.Seats[row]+String(column))) {
      return "bg-[#eeeeee] text-white";
    } else if(this.isSelected(row,column)) {
      return "bg-[#1ea83c] text-white"
    } else {
      return "bg-white text-[#1ea83c] border-[#1ea83c]"
    }
  }

  isSelected(row:number, column:number) {
    return this.selectedSeats.includes(this.Seats[row]+String(column))
  }

  selectSeat(row:number, column:number) {
    if(this.selectedSeats.length < this.selectedTicketCount) {
      this.selectedSeats.push(this.Seats[row]+String(column))
    }
    console.log(this.selectedTicketCount,this.selectedSeats.length)
  }
}
