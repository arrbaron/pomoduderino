import idle from '../images/idle.png';
import working from '../images/working.jpg';
import resting from '../images/resting.jpg';

const initialState = {
  activeImage: 0,
  images: [
    {
      url: idle,
      alt: 'The dude, walter, and donnie relaxing at the bowling alley'
    },
    {
      url: working,
      alt: 'Walter cocking a pistol, ready to roll'
    },
    {
      url: resting,
      alt: 'The Dude relaxing listening to music'
    }
  ],
  texts: [
    'Your revolution is over, Mr. Lebowski. Condolences. The bums lost. My advice is to do what your parents did; get a job, sir. The bums will always lose. Do you hear me, Lebowski?',
    'You have got to buck up, man. You cannot drag this negative energy in to the tournament!',
    'Fuck it, Dude, let\'s go bowling.'
  ]
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IMAGE':
      return { ...state, activeImage: action.image };
    case 'SET_TEXT':
      return { ...state, text: action.text };
    case 'SET_SOUND':
      return { ...state, sound: action.sound };
    default:
      return state;
  }
};

export default alertReducer;

// Take it easy, Dude.
// Fuck it, Dude, let's go bowling.
// You have got to buck up, man. You cannot drag this negative energy in to the tournament!
// Life does not stop and start at your convenience, you miserable piece of shit.