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
    let response = "Hmm, I'm not quite sure about that. Could you tell me more?";

    // Friendly responses for common healthcare inquiries
    if (message.includes("headache")) {
        response = "It sounds like you have a headache. Try drinking water and resting in a dark, quiet room. If it persists, let me know!";
    } else if (message.includes("fever")) {
        response = "A fever? That's no fun. Remember to drink plenty of fluids and rest. If your fever continues for a few days, it might be a good idea to see a doctor.";
    } else if (message.includes("cold")) {
        response = "Colds are common! Rest up, drink lots of fluids, and keep warm. If it doesn't go away, you might want to consult a doctor.";
    } else if (message.includes("thyroid")) {
        response = "Thyroid issues can make you feel tired or moody. If you're concerned, it's worth discussing with an endocrinologist.";
    } else if (message.includes("diabetes")) {
        response = "Diabetes can be managed with a healthy diet, exercise, and proper medication. Have you consulted with a healthcare provider about it?";
    } else if (message.includes("asthma")) {
        response = "Asthma can be triggered by allergens or exercise. Make sure to carry your inhaler and avoid known triggers. Does that help?";
    } else if (message.includes("flu")) {
        response = "The flu can make you feel really run down. Make sure to rest, stay hydrated, and if symptoms worsen, seek medical attention.";
    } else if (message.includes("stomach ache")) {
        response = "Stomach aches can be caused by many things like indigestion or stress. Try to eat light meals and relax. If the pain persists, visit a doctor.";
    } else if (message.includes("allergy")) {
        response = "Allergies can be tricky! Try to avoid allergens and consider taking antihistamines. Severe symptoms may require medical attention.";
    } else if (message.includes("anxiety")) {
        response = "Anxiety can feel overwhelming. Deep breathing, meditation, or talking to someone can help. If it gets too much, consider reaching out to a mental health professional.";
    } else if (message.includes("back pain")) {
        response = "Back pain can result from poor posture or heavy lifting. Try gentle stretches and rest. If it persists, seeing a doctor could be helpful.";
    } else {
        response = "I'm here to help! Feel free to ask me about common health issues, and I'll do my best to provide useful information.";
    }

    appendMessage(response, false);
}
