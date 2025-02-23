import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  searchQuery: string = '';
  items: string[] = ['Organizer 1', 'Event 1', 'Attendee 1', 'Event 2', 'Organizer 2'];
  filteredItems: string[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // Subscribe to search query changes
    this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
      this.filterItems();
    });
  }

  filterItems(): void {
    this.filteredItems = this.items.filter(item => 
      item.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
