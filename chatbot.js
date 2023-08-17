const chatbotContainer = document.createElement("div");
chatbotContainer.className = "chatbox";
chatbotContainer.innerHTML = `

        <div class="chatbox__support">
            <div class="chatbox__header">
                <div class="chatbox__image--header">
                    <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image">
                </div>
                <div class="chatbox__content--header">
                    <h4 class="chatbox__heading--header">Chat support</h4>
                    <p class="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
                </div>
            </div>
            <div class="chatbox__messages">
                <div></div>
            </div>
            <div class="chatbox__footer">
                <input type="text" placeholder="Write a message...">
                <button class="chatbox__send--footer send__button">Send</button>
            </div>
        </div>
        <div class="chatbox__button">
            <button><img src="./images/chatbox-icon.svg" /></button>
        </div>
`;


//(CSS file)
const styles = document.createElement("link");
styles.rel = "stylesheet";
styles.href = "https://fabulous-belekoy-8e0af5.netlify.app/style.css"; // Replace with the actual path
document.head.appendChild(styles);

// (JS file)
const script = document.createElement("script");
script.src = "https://fabulous-belekoy-8e0af5.netlify.app/app.js"; 
document.body.appendChild(script);

// Append the chatbot container to the document body
document.body.appendChild(chatbotContainer);
