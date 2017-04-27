import { Component, OnInit } from '@angular/core';
import {ThreadsService} from '../services/threads.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';
import {UserThreadsLoadedAction} from '../store/actions';
import {ThreadSelectedAction} from '../store/actions';
import * as _ from 'lodash';
import { Thread } from '../../../shared/model/thread';
import { ThreadSummaryVM } from './thread-summary.vm';
import { userNameSelector } from './userNameSelector';
import { mapStateToUnread } from './mapStateToUnread';
import { stateToThreadSummariesSelector } from './stateToThreadSummariesSelector';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {
  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVM[]>;
  
  constructor(private store: Store<ApplicationState>) {
    this.userName$ = store.select(userNameSelector);
    this.unreadMessagesCounter$ = store.map(mapStateToUnread);
    this.threadSummaries$ = store.select(stateToThreadSummariesSelector);
  }
  
 
  ngOnInit() {
        this.store.dispatch(new LoadUserThreads());

        // this.threadsService.loadUserThreads()
        //   .subscribe(response => this.store.dispatch(new UserThreadsLoadedAction(response)));

  }
  
  onThreadSelected(selectedThreadId: number) {
    this.store.dispatch(new ThreadSelectedAction(selectedThreadId));
  }

}
