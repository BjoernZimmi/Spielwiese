import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, signal } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
import { Books } from '../interfaces/books.interface';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { environments } from '../../environments/environments';
import { LifecycleComponent } from "../lifecycle/lifecycle.component";
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-info-box',
  standalone: true,
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css',
  imports: [AsyncPipe, LifecycleComponent, CommonModule]
})



export class InfoBoxComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('lifecycle') child!: LifecycleComponent;

  title = signal('Hey');

  fg: FormGroup;

  books$: Observable<Books[]>;

  showOrHidden = false;
  hidden = true;
  bookUrl = environments.apiPath;

  newName: string = " Test Name ";

  x: number = 0;
  mynumber = 123456;

  constructor(private bookData: BookDataService, private cd: ChangeDetectorRef) {
    this.books$ = this.bookData.getBooks(this.bookUrl);
    this.fg = new FormGroup({
      firstForm: new FormControl()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  ngOnInit(): void {
    this.howToFetch();
    this.change();
  }

  change() {
    this.title.set('Bye');
  }

  howToFetch() {
    const fetchPromise = fetch(this.bookUrl);

    console.log(fetchPromise);

    fetchPromise.then((response) => {
      console.log(`Received response: ${response.status}`);
    });

    console.log("Started request…");

  }


  ngDoCheck(): void {
  }

  ngAfterContentInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  ngAfterViewInit(): void {
    // console.log(`Name is: + ${this.child?.myNumber}`);
    this.x = this.child?.myNumber;
    this.cd.detectChanges();
  }

  ngAfterViewChecked(): void {

  }

  ngOnDestroy(): void {
  }



  /**
   * @returns Show and hide the text 
   */
  showHiddenFunction() {
    return this.showOrHidden;

  }


}
