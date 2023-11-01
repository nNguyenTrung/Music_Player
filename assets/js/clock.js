function showTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    let timePeriod = "AM";
    if (hours >= 12) {
      timePeriod = "PM";
    }
    if (hours > 12) {
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    const time = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${timePeriod}`;
    document.getElementById("clock").innerHTML = time;
  }
  setInterval(showTime, 1000);
  
  function getTimePeriod() {
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 0 && hours < 12) {
      return "morning";
    } else if (hours >= 12 && hours < 18) {
      return "afternoon";
    } else {
      return "night";
    }
  }
  
  const clock = document.getElementById("clock");
  const content = document.getElementById("content");
  let clickCount = 0;
  const morning = [
    "Good morning and have a nice day <3",
    "Did you sleep well last night? Have a good day.",
    "Good morning <3. You look so radiant today.",
    "Hope you all have a nice day."
  ];
  const afternoon = [
    "Hello, good afternoon.",
    "Wish you forever beautiful and tender as the beauty of sunset.",
    "This afternoon, I hope everything will be all right.",
    "By miles, you are far from me. <br>By thoughts, you are close to me. <br>By hearts, you are in me. Have a great time."
  ];

  const night = [
    "No single piece of chocolate <br>can be sweeter than your smile <br>when you read this message. Goodnight .",
    "Good night, my little princess.",
    "Have a good night darling",
    "Close your eyes and stay calm. <br>It’s time to rest. Good night ."
  ];

  clock.addEventListener("click", () => {
    clickCount++;
    const timePeriod = getTimePeriod();
    switch (timePeriod) {
      case "morning":
        const randomIndex = Math.floor(Math.random() * morning.length);
        content.textContent = morning[randomIndex];
        content.innerHTML = content.textContent;
        break;
      case "afternoon":
        const randomIndex_2 = Math.floor(Math.random() * morning.length);
        content.textContent = afternoon[randomIndex_2];
        content.innerHTML = content.textContent;
        break;
      case "night":
        const randomIndex_3 = Math.floor(Math.random() * morning.length);
        content.textContent = night[randomIndex_3];
        content.innerHTML = content.textContent;
        break;
      default:
        content.innerHTML = "error";
    }
    if (clickCount % 2 === 0) {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });