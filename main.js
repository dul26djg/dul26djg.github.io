let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #884cb8;">Estudio en la UNAM, enseño programas de Microsoft y hago divulgacion, trabajo como CEO de una pagina para poder estudiar y aprender diversas materias e idiomas</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
