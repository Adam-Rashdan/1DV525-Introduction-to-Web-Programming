const template = document.createElement('template')
/**
 * HTML and CSS part of chat application
 *
 * @type {string}
 */
template.innerHTML =
  `
<style>
ul{
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}
li {
  list-style-type: none;
}
#chat {
  height: 400px;
  top: 0;
  background-color: white;
  text-align: left;
  overflow: auto;
}
#input {
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #2196F3;
  height: 100%;
}

button {
  transition-duration: 0.4s;
  height: 20px;
}

button:hover {
  background-color: black;
  color: white;
}

</style>
<div id="chat">
<ul id="messages">
</ul>
</div>
<div id="input">
<textarea rows="2" cols="50" id="chatInput" name="chatMessage" style="width: 390px">
</textarea>
<button type="button" id="send">Send</button>
<button type="button" id="changeUserName">Change username</button>
</div>
`
class ChatApp extends window.HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.chatMessages = this.shadowRoot.querySelector('#messages')
    this.chatInput = this.shadowRoot.querySelector('#chatInput')
    this.sendBtn = this.shadowRoot.querySelector('#send')
    this.chat = this.shadowRoot.querySelector('#chat')
    this.changeUsername = this.shadowRoot.querySelector('#changeUserName')
    this.hasUsername = true
    this.chatObj = {
      type: 'message',
      data: 'The message text is sent using the data property',
      username: '',
      channel: 'my, not so secret, channel',
      key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
    }
    this.socket = new window.WebSocket('ws://vhost3.lnu.se:20080/socket/')
  }

  /**
   * Handles the received data form websocket by formatting it
   * and then show it to the user also specify the maximum number of messages
   *
   *
   * @param {MessageEvent} event
   */
  receiveHandler (event) {
    const data = JSON.parse(event.data)
    if (data.type === 'message' || data.type === 'notification') {
      if (this.chatMessages.childNodes.length === 50) {
        this.chatMessages.removeChild(this.chatMessages.childNodes[1])
      }
      const li = document.createElement('li')
      li.appendChild(
        document.createTextNode(
          `${this.messageTimeHandler()} ${data.username}: ${data.data}`
        )
      )
      this.chatMessages.appendChild(li)
      this.chat.scrollTop = this.chat.scrollHeight
    }
  }

  /**
   * Show the time of chat next to messages
   *
   * @returns {string}
   */
  messageTimeHandler () {
    const date = new Date()
    const time =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    return time
  }

  /**
   * Handles sending messages and setting the user name for the chat
   */
  sendHandler () {
    // Check user name and set it
    if (this.hasUsername === false) {
      const username = this.chatInput.value
      if (username.length > 0) {
        window.localStorage.setItem('username', this.chatInput.value)
        this.chatInput.value = ''
        this.chatObj.username = username
        this.removeUserNameHandler()
      }
    } else { // send the message
      const message = this.chatInput.value
      if (message.length > 1) {
        this.chatInput.value = ''
        this.chatObj.data = message
        this.socket.send(JSON.stringify(this.chatObj))
      } else {
        this.chatInput.value = ''
      }
    }
  }

  /**
   * Remove the message form input field after sent it
   */
  removeUserNameHandler () {
    this.changeUsername.disabled = false
    this.shadowRoot
      .querySelector('#input')
      .removeChild(this.shadowRoot.querySelector('#input').firstChild)
    this.sendBtn.textContent = 'Send'
    this.hasUsername = true
  }

  /**
   * Handles user input
   */
  userNameHandler () {
    this.changeUsername.disabled = true
    this.chatInput.value = ''
    this.hasUsername = false
    this.sendBtn.textContent = 'Apply'
    const p = document.createElement('p')
    p.textContent = 'Enter username below!'
    this.shadowRoot.querySelector('#input').prepend(p)
  }

  connectedCallback () {
    if (!window.localStorage.getItem('username')) {
      this.userNameHandler()
    } else {
      this.chatObj.username = window.localStorage.getItem('username')
    }
    this.socket.addEventListener('message', (event) => {
      this.receiveHandler(event)
    })
    this.sendBtn.addEventListener('click', (event) => {
      this.sendHandler()
    })
    this.changeUsername.addEventListener('click', (event) => {
      this.userNameHandler()
    })
    this.chatInput.addEventListener('click', (event) => {
      this.chatInput.focus()
    })
    this.chatInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.sendHandler()
      }
    })
  }

  disconnectedCallback () {
    this.socket.close()
  }
}

window.customElements.define('chat-app', ChatApp)
