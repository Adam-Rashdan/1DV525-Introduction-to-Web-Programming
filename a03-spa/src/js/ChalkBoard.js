const template = document.createElement('template')
/**
 * HTML part
 *
 * @type {string}
 */
template.innerHTML = `
<style>
  :host {
    background:#002418;
    font-size: 1.2em;
    color:white;
    width:358px;
    height:400px;
    padding:10px;
    border:6px solid #9b3b00;
    border-bottom:12px solid #9b3b00;
    margin:5px;
    float:left;
    border-radius: 3px;
  }
  #text{
  height: available;
  }
</style>
<p id='text'></p>
`

/**
 * A simple class which simulating a board
 * when the user clicks on it filled with a specific text
 */
export class ChalkBoard extends window.HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.pTag = this.shadowRoot.querySelector('#text')
    this.intervalID = null
    this.letter = 0
    this.text = 'Java script is fun'
    this.speed = 25
  }

  /**
   * Handles the write on board functionality
   * Stops the writing when the board is full
   * Wipes the board if it is filled
   *
   * @param {Event} event
   */
  writeOnBoardHandler (event) {
    this.intervalID = setInterval(() => {
      if (this.pTag.offsetHeight > this.offsetHeight) {
        this.dispatchEvent(new window.CustomEvent('filled'))
        this.stopWritingHandler()
        this.wipeBoardHandler() // wipe the board when it is full
        return
      }
      this.pTag.textContent += this.text.charAt(this.letter++)
      if (this.letter >= this.text.length) {
        this.letter = 0
        this.pTag.textContent += ' '
      }
    }, this.speed)
  }

  /**
   * handles the stop writing functionality
   */
  stopWritingHandler () {
    clearTimeout(this.intervalID)
  }

  /**
   * handles wipe board functionality
   */
  wipeBoardHandler () {
    this.pTag.textContent = ' '
    this.letter = 0
  }

  connectedCallback () {
    this.addEventListener('mousedown', this.writeOnBoardHandler)
    this.addEventListener('mouseout', this.stopWritingHandler)
    this.addEventListener('mouseup', this.stopWritingHandler)
  }

  disconnectedCallback () {
    this.removeEventListener('mouseout', this.stopWritingHandler)
    this.removeEventListener('mouseup', this.stopWritingHandler)
    this.removeEventListener('mousedown', this.writeOnBoardHandler)
    this.stopWritingHandler()
  }
}

window.customElements.define('chalk-board', ChalkBoard)
