const initialState = {
  status: 'idle',
  workingMinutes: 25,
  workingSeconds: 0,
  restingMinutes: 5,
  restingSeconds: 0,
  currentMinutes: 25,
  currentSeconds: 0,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKING':
      return { ...state, ticking: action.ticking };
    case 'SET_MINUTES':
      return { 
        ...state,
        currentMinutes: action.minutes
      };
    case 'SET_SECONDS':
      return { 
        ...state,
        currentSeconds: action.seconds
      };
    case 'SET_WORKING_MINUTES':
      return {
        ...state,
        currentMinutes: action.minutes,
        workingMinutes: action.minutes
      };
    case 'SET_WORKING_SECONDS':
      return {
        ...state,
        currentSeconds: action.seconds,
        workingSeconds: action.seconds
      };
    case 'SET_RESTING_MINUTES':
      return { ...state, restingMinutes: action.minutes };
    case 'SET_RESTING_SECONDS':
      return { ...state, restingSeconds: action.seconds };
    case 'SET_STATUS':
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default timerReducer;
