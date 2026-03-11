sequenceDiagram
    participant browser
    participant server

    browser-server GET httpsstudies.cs.helsinki.fiexampleappspa
    activate server
    server--browser HTML document
    deactivate server

    browser-server GET main.css
    server--browser CSS file

    browser-server GET spa.js
    server--browser JavaScript file

    Note right of browser JavaScript starts running

    browser-server GET data.json
    activate server
    server--browser Notes JSON
    deactivate server

    Note right of browser JavaScript renders notes using DOM