// When the user selects a disease
function selectDisease(disease) {
    appendMessage(`I have ${disease}, what should I do?`, true);
    respondToUser(disease.toLowerCase());
}

// Send message function
function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    if (userMessage.trim()) {
        appendMessage(userMessage, true);
        respondToUser(userMessage.toLowerCase());
        document.getElementById("user-input").value = "";
    }
}

// Append message to the chatbox
function appendMessage(message, isUser) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = isUser ? "user-message" : "bot-message";
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Bot responds to user input
function respondToUser(message) {
    let response = "I'm here to help! Could you provide more information?";

    // AI-like responses for common diseases
    if (message.includes("headache")) {
        response = "For a headache, ensure you're hydrated. You can take a break, rest, and if the pain persists, consult a healthcare provider.";
    } else if (message.includes("fever")) {
        response = "A fever might indicate an infection. Keep yourself hydrated, and if the fever lasts more than a few days, it’s best to see a doctor.";
    } else if (message.includes("thyroid")) {
        response = "Thyroid problems can affect your metabolism, leading to fatigue or mood swings. Consult with an endocrinologist for a detailed checkup.";
    } else if (message.includes("diabetes")) {
        response = "Diabetes management is crucial! Make sure to maintain a healthy diet, exercise, and regularly monitor your blood sugar levels.";
    } else if (message.includes("cold")) {
        response = "For a cold, rest up, drink lots of fluids, and avoid crowded areas. If symptoms worsen, consult a doctor.";
    } else {
        response = "I don't have detailed information on that topic, but feel free to ask me more questions!";
    }

    appendMessage(response, false);
}
