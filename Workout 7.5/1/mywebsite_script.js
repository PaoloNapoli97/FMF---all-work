// Asynchronous function to fetch and process emojis from GitHub API
async function processEmojis() {
    // Fetch emojis from GitHub API and convert the response to JSON
    const emojis = await fetch('https://api.github.com/emojis').then((r) => r.json());

    // Get the response div from the HTML document
    // responseDiv is a DOM element, an instance of the HTMLElement class
    // We'll go through the this class on the next lecture, but you can also check the documentation
    const responseDiv = document.getElementById('response');

    // Loop over each emoji
    for (let [name, url] of Object.entries(emojis)) {
        // Create a new paragraph element and text node for the emoji name
        const emojiP = document.createElement('p');
        const textContainer = document.createTextNode(`:${name}:`);

        // Create a new image element for the emoji image
        const emojiImage = document.createElement('img');
        emojiImage.src = url;
        emojiImage.width = 30;
        emojiImage.style.aspectRatio = "auto";
        emojiImage.style.margin = "10px";

        // Append the text and image to the paragraph, then append the paragraph to the response div
        emojiP.appendChild(textContainer);
        emojiP.appendChild(emojiImage);

        responseDiv.appendChild(emojiP);
    }
}

// Add event listener for when the window loads
window.addEventListener('load', function () {
    processEmojis();

    // Get the submit button from the HTML document using its id
    const submitButton = document.getElementById('submitButton');

    // Add event listener for when the submit button is clicked
    submitButton.addEventListener('click', function (evt) {
        // Prevent the default form submission behavior (i.e. reload the page on submit)
        evt.preventDefault();

        // console.log('Button clicked');

        // Get the form from the HTML document
        const form = document.querySelector('#formRequest');
        if (!form) throw new Error('Form not found');

        // we don't need this anymore, we can use the FormData object
        // const inputURL = document.getElementById('inputURL');
        // const url = inputURL.value;
        // const responseDiv = document.getElementById('response');
        // const method = document.getElementById('methodSelect').value;

        // Create a FormData object from the form
        const formData = new FormData(form);

        console.log(formData);

        // You can add additional data to the form using the append method
        formData.append("test", "test");
        // but also override (or set if not existing) the value of a key using the set method
        formData.set("test", "testNew");
        // and check if a key exists using the has method
        formData.has("test"); // true

        // remove the test data using the delete method
        formData.delete("test");

        // You can access the form data using the get method
        const url = formData.get('url');
        const method = formData.get('method');
        const responseDiv = document.getElementById('response');

        // Function to display an error message in the response div
        // I'm creating a closure here, since the response div is not 
        // in the scope of the function but on the scope of the event listener
        // We could also pass it as a parameter, or retrieve it from the DOM every time
        function displayError(errorMessage) {
            const errorP = document.createElement('p');
            // innerHTML basically does the same thing as createTextNode, but it's more dangerous
            // you're writing HTML code, so you have to be careful
            // its use is discouraged, stick to createTextNode or create a DOM element
            // errorP.innerHTML = "Invalid protocol!";
            const errorText = document.createTextNode(errorMessage);

            // Once the text node is created, we can append it to the paragraph
            errorP.appendChild(errorText);
            response.appendChild(errorP);

            errorP.classList.add('error');

            // TODO : your turn, scroll to the response div!!
            let rect = errorP.getBoundingClientRect().top;
            window.scrollTo({
                top: rect,
                behavior: "smooth"
            });
        }

        // WARNING: THIS CODE WAS NOT SHOWN IN THE LECTURE, CHECK THE DOCUMENTATION AND THE SLIDES
        // Ah, I forgot to mention, you can remove all classes from an element using the classList property
        // But again, we'll talk again HTMLElements a bit more in the next lecture
        for (let c of responseDiv.classList) {
            responseDiv.classList.remove(c);
        }
        // And you can add a class using the add method
        responseDiv.classList.add('response');
        // Check the browser inspector to see the changes


        // Remove all child nodes of the response div (if any)
        for (let child of responseDiv.childNodes) {
            responseDiv.removeChild(child);
        }
        // Start form data validation

        // Try to create a URL object from the URL input value and check if the protocol is HTTP or HTTPS
        try {
            const urlObj = new URL(url);
            if (!urlObj.protocol.startsWith("http")) {
                displayError("Invalid protocol!");
            }
        }
        // If an error occurs, display the error message
        catch (e) {
            if (e instanceof TypeError) {
                throw new TypeError("Not a url", e);
            }
            displayError(e);

            // Stop the execution of the function, since the URL is invalid
            // and we can't make a request
            return;
        }

        // Once the URL data is validated, we can make the request

        // TODO : your turn, validate the method parameter

        // TODO : your turn, validate the body parameter (if any)


        // We build a parameters object to pass to the fetch function
        // with the right parameters for the requested method
        const parameters = {};
        parameters.method = method;

        // ALLOW CROSS-ORIGIN REQUESTS
        parameters.mode = 'cors';

        // TODO: If the method is not GET, we need to add the body parameter
        // and also the Content-Type header.
        // You could check if the body is actual JSON data, and if so, add the Content-Type header
        // Or ask the user using a flag in the form (like a checkbox)
        if (method !== "GET") {
            const bodydata = formData.get();
            
            try {
                JSON.parse(bodydata);
            } catch (e) {
                throw new Error ("not json data");
            }
   
            try {
                parameters.body = JSON.stringify(bodydata);
                parameters.headers = {
                    'Content-Type': 'application/json',
                };    
            } catch (error) {
                throw new Error("error");
            }
        }
        fetch(url, parameters).then(
            (response) => {
                // If the response is not ok, throw an error with the status code
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
                }
                // TODO Check if the response is JSON!!
                if (response.ok) {
                    if (response.headers.get("Content-Type").includes("application/json")) {
                        return response.json();
                    }
                    else {
                        return response.text();
                    }
                }
                // How? Check the Content-Type header
                // Else, return the response.text()

            }).then((json) => {
                // console.log(json);
                responseDiv.appendChild(document.createTextNode(JSON.stringify(json)));
                // responseDiv.innerHTML = JSON.stringify(json);

                // TODO : your turn, scroll to the response div!!
                let rect2 = errorP.getBoundingClientRect().top;
                window.scrollTo({
                    top: rect2,
                    behavior: "smooth"
                });
            }).catch((reason) => {
                if (reason instanceof TypeError) {
                    throw new TypeError("Error");
                    // Do something else here...
                }
                console.error(reason);
                displayError("Caught an error " + reason.message);
            });

    });

});
