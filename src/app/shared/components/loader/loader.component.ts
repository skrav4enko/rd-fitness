import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/services/loader.service';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean;
  subscription: Subscription[] = [];


  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.getLoadingState();
  }

  getLoadingState(): Observable<boolean> {
    return this.loaderService.loading$;
  };

}
