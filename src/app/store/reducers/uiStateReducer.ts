
import {UiState, INITIAL_UI_STATE} from '../ui-state';
import {Action} from '@ngrx/store';

export function uiStateReducer(state: uiState = INITIAL_APPLICATION_STATE, action: Action) : UiState {
  switch(action.type) {
      
      case THREAD_SELECTED_ACTION:
          const newState = Object.assign({}, state);
          newState.currentThreadId = action.payload;
          return newState;
      default:
        return state;
    }
}