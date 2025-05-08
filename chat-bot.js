document.getElementById("chat-button").addEventListener("click", handleInput);

let lastNumber = "NO";

async function handleInput() {
    const inputField = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-answer");
    const answer = inputField.value.trim().toLowerCase();
    inputField.value = "";

    function respond(msg) {
        chatBox.innerText = msg; // Replaces text each time
    }

    const greetings = ["hello", "hi", "hey", "what's up", "sup", "yo", "hello!", "hi!", "hey!", "what's up!", "sup!", "yo!"];
    const french = ["bonjour", "bonjour!", "salut", "salut!"];
    const german = ["hallo", "hallo!", "guten morgen", "guten tag", "guten abend"];
    const lux = ["moien"];
    const thanks = ["thank you", "thanks", "thank u", "ok", "okey", "k", "thank you very much", "thanks!"];
    const creator = ["who is your creator", "who created you", "your creators", "who are your creators?", "your creator"];
    const wellbeing = ["how are you", "how are you?", "what's up", "how's it going", "how are you doing", "you good"];
    const jokes = ["tell a joke", "joke", "tell me a joke"];
    const laugh = ["ha", "hah", "haha", "hahaha", "hahahaha"];
    const wiki = ["wiki", "wikipedia"];
    const wikiAsk = ["search from wikipedia", "search from wiki", "can you search from wikipedia?", "can you search from wiki"];
    const whatcan = ["what can you do", "what can you do?"];
    const randomNum = ["random number", "tell me a random number"];

    if (greetings.includes(answer)) {
        respond(randomChoice(["Hi!", "Hello!", "Hey!"]) + "\n" +
                randomChoice(["How can I help you?", "Do you need any help?", "What can I help you with?"]));
    } else if (french.includes(answer)) {
        respond("bonjour!\nSorry, but Je ne parle pas français.");
    } else if (german.includes(answer)) {
        respond("Hallo!\nSorry, but Ich spreche kein Deutsch.");
    } else if (lux.includes(answer)) {
        respond("Moien!\nSorry, but I don't speak Luxembourgish.");
    } else if (thanks.includes(answer)) {
        respond(randomChoice(["No problem!", "No worries!"]));
    } else if (creator.includes(answer)) {
        respond("I was created by Timurs and someone who prefers to stay anonymous.");
    } else if (wellbeing.includes(answer)) {
        respond("I'm doing great!\nHow about you?");
    } else if (jokes.includes(answer)) {
        respond("Why is the math book sad? Because it has too many problems!");
    } else if (laugh.includes(answer)) {
        respond("Yes! It's funny! 😂");
    } else if (whatcan.includes(answer)) {
        respond("I can do many things like tell jokes, generate random numbers, or search from Wikipedia.");
    } else if (randomNum.includes(answer)) {
        const limit = randomChoice(["10", "100", "1000", "10000"]);
        const num = Math.floor(Math.random() * parseInt(limit)) + 1;
        respond(`Random number from 1 to ${limit}: ${num}`);
    } else if (wiki.includes(answer) || wikiAsk.includes(answer)) {
        const topic = prompt("What would you like to search on Wikipedia?");
        if (topic) {
            const summary = await fetchWikiSummary(topic);
            respond(`Wikipedia says:\n${summary}`);
        } else {
            respond("No topic entered.");
        }
    } else {
        respond(randomChoice(["Sorry, I didn't understand you. Could you please rephrase?", "Sorry, I didn't understand what you said! Could you please repit?", "Sorry, I didn't understand!"]));
    }
}

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function fetchWikiSummary(query) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.extract || "No summary available.";
    } catch (err) {
        return "...";
    }
}
