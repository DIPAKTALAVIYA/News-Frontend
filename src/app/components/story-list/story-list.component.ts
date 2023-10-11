import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StoryModel } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})

export class StoryListComponent implements AfterViewInit{

  stories!: StoryModel[];

  displayedColumns: string[] = ['title'];
  dataSource: MatTableDataSource<StoryModel>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private storyService:StoryService) {
      this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.storyService.getStories()
      .subscribe({
        next:(res)=>{
         this.stories = res;
         this.dataSource = new MatTableDataSource(res);
         this.dataSource.paginator = this.paginator; 
         this.dataSource.sort = this.sort;
        },
        error:(err)=>{
          console.log(err.error);
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
