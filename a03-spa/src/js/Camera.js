const template = document.createElement('template')
/**
 * HTML part
 *
 * @type {string}
 */
template.innerHTML = `
    <div id="video-container" style="height: 300px">
    <link rel="stylesheet" href="index.css">
        <video id="camera-stream" width="400"></video>
        <div style="margin-top: 100px ">
        <button class="negative ui labeled icon button">
          <i class="delete icon"></i>
          Clear filter
        </button>
        <button class="positive ui right labeled icon button">
          <i class="right eye icon"></i>
          Apply filter
        </button>
        </div>
    </div>
`
/**
 * A simple class that inherit window.HTMLElement
 * and create a simple camera application
 */
export class Camera extends window.HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.videoElement = this.shadowRoot.querySelector('#camera-stream')
    this.filterBtn = this.shadowRoot.querySelector('.positive.button')
    this.removeFilterBtn = this.shadowRoot.querySelector('.negative.button')
  }

  /**
   * Handles the filters of the camera
   * https://developer.mozilla.org/en-US/docs/Web/CSS/filter
   */
  cameraFiltersHandler () {
    const filtersArr = [
      'grayscale',
      'sepia',
      'blur',
      'brightness',
      'contrast',
      'hue-rotate',
      'opacity',
      'saturate',
      'invert'
    ]
    /**
     * Add a class list for the video filter to use it in css file to activate filters
     * Generating a random value to use it for filter array
     *
     * @type {number}
     */
    const filter = Math.floor(Math.random() * 10)
    console.log(filter)
    this.videoElement.classList = ''
    this.videoElement.classList.add(filtersArr[filter])
  }

  /**
   * Handles removing filter functionality
   * by setting the class name to empty string to deactivate css property
   */
  removeFilterHandler () {
    this.videoElement.classList = ''
  }

  connectedCallback () {
    /**
     * Check if the video media is supported by the browser
     * if true request the user permission to open the camera
     */

    if (navigator.getUserMedia) {
      // request the user permission to open the camera
      navigator.getUserMedia(
        {
          video: true
        },

        // After the permission got accepted by user
        (localMediaStream) => {
          this.videoElement.srcObject = localMediaStream
          this.videoElement.play()
          /** Adding functionality for the Apply filter button
           *  to apply random filter to video
           */
          this.filterBtn.addEventListener('click', (e) => { this.cameraFiltersHandler() })
          /** Adding functionality for the Clear filter button
           *  to clear filter from video
           */
          this.removeFilterBtn.addEventListener('click', (e) => { this.removeFilterHandler() })
        },

        /**
         *  In case the permission refused or something went wrong
         *
         * @param {string} err
         */
        function (err) {
          console.log('Ops :( Something went wrong : ' + err)
        }
      )
    } else {
      /**
       * In case something went wrong
       */
      // eslint-disable-next-line no-undef
      alert('It seems that the browser does not support Camera media ')
    }
  }
}

window.customElements.define('camera-app', Camera)
