## 0.4 New Note Diagram

In this exercise, I created a diagram that describes what happens when a user creates a new note on the page:

https://studies.cs.helsinki.fi/exampleapp/notes

When the user writes a note and clicks the Save button, the browser sends an HTTP POST request to the server at /new_note.
The server processes the request, stores the note in the notes array, and responds with a 302 redirect to /notes.

After that, the browser reloads the page and sends new GET requests to fetch:

the HTML document

the CSS file

the JavaScript file

the notes data in JSON format

Finally, the browser executes the JavaScript code and renders the updated list of notes on the page.

## 0.5 Single Page App Diagram

In this exercise, I created a diagram that explains what happens when the user opens the Single Page Application (SPA) version of the notes app:

https://studies.cs.helsinki.fi/exampleapp/spa

The browser first loads the HTML page, then fetches the CSS and JavaScript files.
After the JavaScript file is executed, it sends an HTTP GET request to the server to retrieve the notes data in JSON format.

The JavaScript code then dynamically renders the notes on the page using the DOM API, without requiring a full page reload.

## 0.6 New Note in Single Page App Diagram

In this exercise, I created a diagram describing what happens when a user creates a new note in the Single Page Application version of the app.

When the user writes a note and clicks Save, JavaScript sends an HTTP POST request to the server using AJAX.
The server processes the request and returns the new note as a JSON response.

Instead of reloading the entire page, JavaScript updates the notes list dynamically using the DOM, allowing the new note to appear instantly on the page.