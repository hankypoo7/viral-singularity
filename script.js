let infectionCount = 0;
let totalDevices = 100;

function infect() {
    if (infectionCount < totalDevices) {
        infectionCount++;
        document.getElementById("infectionCount").textContent = infectionCount;
        updateProgressBar();
        logMessage("Infected a new device!");
    }
}

function updateProgressBar() {
    let progress = (infectionCount / totalDevices) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}

function logMessage(message) {
    let logPanel = document.getElementById("logPanel");
    let newLog = document.createElement("p");
    newLog.textContent = message;
    logPanel.prepend(newLog);
}
