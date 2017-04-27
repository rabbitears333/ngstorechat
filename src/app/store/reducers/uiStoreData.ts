import {UiState, INITIAL_UI_STATE} from '../ui-state';
import {Action} from '@ngrx/store';
import {StoreData} from '../store-data';
import {USER_THREADS_LOADED_ACTION, UserThreadsLoadedAction} from '../actions';

export function uiStoreData(state: StoreData, action: Action): StoreData {
  switch(action.type) {
      case LOAD_USERS_THREADS_ACTION:
        return handleLoadUserThreadsAction(state, action);
      default:
        return state;
    }
}

function handleLoadUserThreadsAction(state: StoreData, 
  action:LoadUserThreadsAction): StoreData {
  return {
    participants: _.keyBy(action.payload.participants,'id'),
    messages: _.keyBy(action.payload.messages, 'id'),
    threads: _.keyBy(action.payload.threads, 'id')
    
  };
}