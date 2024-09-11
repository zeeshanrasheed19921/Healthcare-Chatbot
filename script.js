function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    if (userMessage.trim()) {
        appendMessage(userMessage, true);
        respondToUser(userMessage.toLowerCase());
        document.getElementById("user-input").value = "";
    }
}

function appendMessage(message, isUser) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = isUser ? "user-message" : "bot-message";
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToUser(message) {
    let response = "Sorry, I don't have that information.";
    
    // Simple healthcare responses
    if (message.includes("headache")) {
        response = "Headaches are common. Make sure you're hydrated and consider resting in a quiet, dark room.";
    } else if (message.includes("fever")) {
        response = "A fever could indicate an infection. Drink plenty of fluids and rest. If it persists, consult a doctor.";
    } else if (message.includes("cold")) {
        response = "For common colds, rest and hydration are key. If symptoms worsen, seek medical advice.";
    } else if (message.includes("symptom")) {
        response = "Please describe your symptoms in more detail, and I can try to assist.";
    }

    appendMessage(response, false);
}
