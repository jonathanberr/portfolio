(function typer() {
    const typingArea = document.getElementById("typingText");
    const aboutMe = "Hi, my name is Jonathan and I'm currently rebuilding the site. See you soon!";
    let index = 0;
    let letter = aboutMe.slice(0, ++index);
    typingArea.innerText = letter;
    setTimeout(typer, 400);
  })();