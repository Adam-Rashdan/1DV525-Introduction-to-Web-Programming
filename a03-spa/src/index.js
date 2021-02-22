/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import './js/DraggableElement'
import Memory from './js/Memory.js'
import './js/Chat-app.js'
import './js/ChalkBoard'
import './js/Camera'

const memoryApp = document.querySelector('#memory')
const chatApp = document.querySelector('#chat')
const boardApp = document.querySelector('#board')
const cameraApp = document.querySelector('#camera-stream')

/**
 * Start memory game
 */
function startMemory () {
  const memoryWindow = document.createElement('draggable-element')
  memoryWindow.className = 'app-win'
  memoryWindow.id = 'memory1'
  document.querySelector('#container').prepend(memoryWindow)
  const template = document.querySelector('#memory-template').content
    .firstElementChild
  const container = template.cloneNode(true)
  Memory(4, 4, container)
  memoryWindow.icon = '/image/memory.png'
  memoryWindow.name = 'Memory'
  memoryWindow.component = container
}

/**
 * Start chat application
 */
function startChat () {
  const chatWindow = document.createElement('draggable-element')
  chatWindow.className = 'app-win'
  chatWindow.id = 'chat1'
  document.querySelector('#container').prepend(chatWindow)
  chatWindow.icon = '/image/chat.png'
  chatWindow.name = 'Chat'
  chatWindow.component = document.createElement('chat-app')
}

/**
 * Start board application
 */
function startBoard () {
  const boardWindow = document.createElement('draggable-element')
  boardWindow.className = 'app-win'
  boardWindow.id = 'bored1'
  document.querySelector('#container').prepend(boardWindow)
  boardWindow.icon = '/image/blackboard.svg'
  boardWindow.name = 'Board'
  boardWindow.component = document.createElement('chalk-board')
}

/**
 * Start Camera application
 */
function startCamera () {
  const cameraWindow = document.createElement('draggable-element')
  cameraWindow.className = 'app-win'
  cameraWindow.id = 'camera1'
  document.querySelector('#container').prepend(cameraWindow)
  cameraWindow.icon = '/image/camera.svg'
  cameraWindow.name = 'Camera'
  cameraWindow.component = document.createElement('camera-app')
}

/**
 * Remove memory window by double click on the app icon
 */
function removeMemoryWindows () {
  const windows = document.querySelectorAll('#memory1')
  windows.forEach((window) => {
    window.remove()
  })
}

/**
 * Remove chat window by double click on the app icon
 */
function removeChatWindows () {
  const windows = document.querySelectorAll('#chat1')
  windows.forEach((window) => {
    window.remove()
  })
}

/**
 * Remove board window by double click on the app icon
 */
function removeBoardWindows () {
  const windows = document.querySelectorAll('#bored1')
  windows.forEach((window) => {
    window.remove()
  })
}

/**
 * Remove camera window by double click on the app icon
 */
function removeCameraWindows () {
  const windows = document.querySelectorAll('#camera1')
  windows.forEach((window) => {
    window.remove()
  })
}

// Open and close memory app by one click for open and double click for close
memoryApp.addEventListener('click', startMemory)
memoryApp.addEventListener('dblclick', removeMemoryWindows)

// Open and close board app by one click for open and double click for close
boardApp.addEventListener('click', startBoard)
boardApp.addEventListener('dblclick', removeBoardWindows)

// Open and close chat app by one click for open and double click for close
chatApp.addEventListener('click', startChat)
chatApp.addEventListener('dblclick', removeChatWindows)

// Open and close camera app by one click for open and double click for close
cameraApp.addEventListener('click', startCamera)
cameraApp.addEventListener('dblclick', removeCameraWindows)
