
import {ApplicationState} from '../store/application-state';

export function mapStateToUnread(state: ApplicationState): number {
    
    const currentUserId = state.uiState.userId;
    
    return _.values<Thread>(state.storeData.threads).reduce(
        (acc, thread) => acc + (thread.participants[currentThreadId] || 0 )
      ,0);
  }