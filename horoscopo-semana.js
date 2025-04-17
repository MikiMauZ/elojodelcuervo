const horoscopos = {
    aries: {
      titulo: "Tiempo de sacudidas necesarias",
      mensaje: "Esta semana te empuja a actuar desde lo que sientes, no desde lo que crees que deberías hacer. Puede que algo cambie de golpe, pero esa sacudida viene a despejar el camino. Escucha lo que arde en tu pecho: hay una decisión que no puede esperar más."
    },
    tauro: {
      titulo: "Ver lo que evitabas",
      mensaje: "Lo que parecía estable podría moverse, y eso está bien. Estás viendo con más claridad algo que antes ignorabas por comodidad. No te juzgues por haber esperado, ahora simplemente decide cómo actuar con esa nueva verdad."
    },
    geminis: {
      titulo: "No todo se resuelve con palabras",
      mensaje: "Querer entenderlo todo a veces agota. Esta semana necesitas más silencio y menos explicación. Si algo se siente confuso, no lo fuerces. Déjalo reposar. A veces, el equilibrio aparece cuando dejamos de girar."
    },
    cancer: {
      titulo: "Siente, sin justificarte",
      mensaje: "Tu sensibilidad será tu mayor fuerza esta semana. Puede que quieras esconder lo que sientes para no molestar, pero justo ahora, mostrarlo te alinea contigo. Permítete ser blando, tierno y verdadero."
    },
    leo: {
      titulo: "Reconectar con lo esencial",
      mensaje: "Lo externo puede brillar, pero esta semana lo importante viene de dentro. Una conversación, una memoria o una raíz olvidada podrían devolverte algo que te faltaba. Quédate con lo simple, y desde ahí toma fuerza."
    },
    virgo: {
      titulo: "Romper el patrón",
      mensaje: "Sientes que repites algo que ya no va contigo. Esta semana es ideal para decir basta, incluso si no tienes aún el plan perfecto. No necesitas una estrategia: solo coraje y verdad. El orden llegará después."
    },
    libra: {
      titulo: "No evites el desequilibrio",
      mensaje: "Hay emociones que se están moviendo y eso es parte del proceso. No intentes agradar a todos ni mantener una armonía que ya no es real. Acepta lo incómodo, y verás que debajo hay una nueva forma de paz."
    },
    escorpio: {
      titulo: "Tu intuición está muy despierta",
      mensaje: "Esta semana vas a sentir cosas antes de que pasen. No ignores esos presentimientos. Confía en tu radar interno. El silencio, la naturaleza y los sueños serán tus mejores aliados. Baja el volumen externo para escuchar mejor dentro."
    },
    sagitario: {
      titulo: "Tu voz tiene impacto",
      mensaje: "Hablar desde lo que eres, sin adornos, puede cambiar muchas cosas esta semana. No se trata de convencer a nadie, sino de expresarte con verdad. Algo que digas tocará a alguien más de lo que imaginas."
    },
    capricornio: {
      titulo: "El mensaje está en lo sutil",
      mensaje: "Puede que no lo entiendas todo ahora mismo, y eso está bien. Hay algo que se está gestando dentro de ti. No tomes decisiones apresuradas. Esta semana es para escuchar, mirar, y dejar que las piezas caigan solas."
    },
    acuario: {
      titulo: "Espacio para lo nuevo",
      mensaje: "Hay ideas que ya no encajan contigo. Estás cambiando, y eso implica soltar pensamientos que antes te definían. Esta semana es ideal para pausar, cuestionarte, y dejar entrar lo inesperado."
    },
    piscis: {
      titulo: "Tu claridad interior se afina",
      mensaje: "Después de semanas intensas, esta vez puedes ver con más serenidad. Tu sensibilidad sigue presente, pero con más orden. Es un buen momento para tomar una decisión basada en lo que sientes y también en lo que sabes."
    }
  };
  
  window.onload = () => {
    for (let signo in horoscopos) {
      const block = document.querySelector(`#${signo} .contenido`);
      if (block) {
        block.innerHTML = `
          <h3>${horoscopos[signo].titulo}</h3>
          <p>${horoscopos[signo].mensaje}</p>
        `;
      }
    }
  };
  
