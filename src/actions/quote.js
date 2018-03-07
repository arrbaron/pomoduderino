export const setImage = (imageUrl, ImageAlt) => ({
  type: 'SET_IMAGE',
  imageUrl,
  imageAlt
});

export const setText = text => ({
  type: 'SET_TEXT',
  text
});

export const setSound = sound => ({
  type: 'SET_SOUND',
  sound
});
