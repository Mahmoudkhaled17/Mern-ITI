sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes note and clicks Save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note right of server: Server adds note to notes array

    server-->>browser: JSON response containing the new note
    deactivate server

    Note right of browser: JavaScript updates the notes list using DOM without reloading the page