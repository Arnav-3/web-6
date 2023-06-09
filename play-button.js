
class PlayButton {
    constructor(audioPlayer) {
      this.playing = true;
      this.buttonContainer = document.querySelector("#play-button");
      this.toggle = this.toggle.bind(this);
      this.buttonContainer.addEventListener('click', this.toggle);
      this.audioPlayer = audioPlayer;
    }
  
    toggle(event) {
      if (this.playing) {
        this.pause();
      }
      else {
        this.play();
      }
      this.playing = !this.playing;
    }
  
    play() {
      this.buttonContainer.src = "images/pause.png";
      this.audioPlayer.play();
    }
  
    pause() {
      this.buttonContainer.src = "images/play.png";
      this.audioPlayer.pause();
    }
  }