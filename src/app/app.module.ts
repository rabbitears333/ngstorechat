import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {INITIAL_APPLICATION_STATE} from './store/application-state';
import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import {ThreadsService} from './services/threads.service';
import {StoreModule} from '@ngrx/store';
import {Action} from '@ngrx/store';
import _ from 'lodash';
import { EffectsModule } from '@ngrx/effects';
import { LoadThreadsEffectService } from './store/effects/load-threads-effect.service';
import { uiStateReducer } from './store/reducers/uiStateReducer';
import { uiStoreData } from './store/reducers/uiStoreData';


@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(combineReducers({
      uiState: uiState,
      storeData: storeData
    }), INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoadThreadsEffectService)
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
