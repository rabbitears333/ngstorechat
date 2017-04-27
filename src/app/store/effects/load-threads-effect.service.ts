import { Injectable } from '@angular/core';
import {ThreadsService} from '../../services/threads.service';
import { LOAD_USER_THREADS_ACTION }  from '../actions';
import { Action}  from '@ngrx/store';

@Injectable() 
export class LoadThreadsEffectService {
    constructor(private actions$: Actions, private threadsService: ThreadsService) {
        
    }
    
    @Effect() userThreads$: Observable<Action> = this.actions$
        .ofType(LOAD_USER_THREADS_ACTION)
        .switchMap(() => this.threadsService.loadUserThreads())
        .map(response => new UserThreadsLoadedAction(response));
}