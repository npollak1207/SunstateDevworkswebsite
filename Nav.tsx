@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --cyan: #00D4C8;
  --orange: #F4622A;
  --navy: #0D1B2A;
  --navy-mid: #132235;
  --navy-light: #1E3349;
  --off-white: #F0EDE6;
  --text-muted: #7A8FA6;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  background: var(--navy);
  color: var(--off-white);
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--navy); }
::-webkit-scrollbar-thumb { background: var(--cyan); border-radius: 2px; }
::selection { background: var(--cyan); color: var(--navy); }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track { animation: marquee 25s linear infinite; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-up { animation: fadeInUp 0.6s ease forwards; }

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.cursor-blink { animation: blink 1s step-end infinite; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.float-anim { animation: float 4s ease-in-out infinite; }

.card-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 64px rgba(0, 212, 200, 0.14);
}
.card-lift-orange:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 64px rgba(244, 98, 42, 0.16);
}
