const log = console.log
function Audio (src) {
  return { src }
}
// function visionChange (changeTransition) {
//   return changeTransition ? false : true
// }
//
// function updateDom (changeTransition) {
//   return function() {
//     var visiontext = document.getElementById('hiddenvision');
//     var visionimage = document.getElementById('visionimage');
//     visiontext.style.opacity = changeTransition ? 1 : 0;
//     visionimage.style.opacity = changeTransition ? 0 : 1
//   }
// }


const sounds = [
  'http://www.soundjig.com/mp3/soundfx/human/aaaahhhh.mp3',
  'http://www.soundjig.com/mp3/soundfx/human/breath.mp3'
];

const soundObjects = [];

sounds.forEach(soundSrc => {
  let sound = new Audio(soundSrc);
  soundObjects.push(sound);
});

function makeSoundObjects (sounds) {
  return sounds.map(soundSrc => new Audio(soundSrc))
}

log(soundObjects)
log(makeSoundObjects(sounds))
