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
  text: 'The world DOES stop and start at your convenience'
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
