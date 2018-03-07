export const startTimer = () => ({
  type: 'START_TIMER'
});

export const stopTimer = () => ({
  type: 'STOP_TIMER'
});

export const pauseTimer = () => ({
  type: 'PAUSE_TIMER'
});

export const setTicking = ticking => ({
  type: 'SET_TICKING',
  ticking
});

export const setMinutes = minutes => ({
  type: 'SET_MINUTES',
  minutes
});

export const setSeconds = seconds => ({
  type: 'SET_SECONDS',
  seconds
});

export const setWorkingMinutes = minutes => ({
  type: 'SET_WORKING_MINUTES',
  minutes
});

export const setWorkingSeconds = seconds => ({
  type: 'SET_WORKING_SECONDS',
  seconds
});

export const setRestingMinutes = minutes => ({
  type: 'SET_RESTING_SECONDS',
  minutes
});

export const setRestingSeconds = seconds => ({
  type: 'REST_RESTING_SECONDS',
  seconds
});

export const setStatus = status => ({
  type: 'SET_STATUS',
  status
});

