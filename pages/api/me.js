export default function handler(req, res) {

  res.status(200).json({ 
    name: 'Roy Erickson',
    age: Math.abs(new Date(Date.now() - new Date("01/18/2009")).getUTCFullYear() - 1970),
    description: "Hola!, me llamo Roy, soy Full Stack Developer",
    username: "! EL TITO",
    photo: `${req.headers.host}/photo.png`,
    status: "https://github-readme-stats.vercel.app/api?username=ELTITO310&show_icons=true&theme=tokyonight"
  });
}