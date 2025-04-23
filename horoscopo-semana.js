const horoscopos = {
  aries: {
    titulo: "Entre la tensión y el despertar",
    mensaje: "Sientes que algo se remueve por dentro, Aries. Esta semana no es para hacer más, sino para sentir mejor. Una sacudida emocional podría sacarte del ritmo habitual, pero no es un castigo: es tu alma reclamando su espacio. Atrévete a hacer esa pausa incómoda. La respuesta no viene de afuera, sino del fuego que aún no te has permitido escuchar."
  },
  tauro: {
    titulo: "Lo que escondías bajo la alfombra",
    mensaje: "Tauro, tu calma habitual se tambalea un poco esta semana. Algo que venías ignorando se asoma con fuerza: puede ser una conversación pendiente o una verdad que habías camuflado de rutina. Aunque cueste, esa claridad trae alivio. No necesitas tener todas las respuestas hoy, pero sí reconocer lo que ya no vibra contigo."
  },
  geminis: {
    titulo: "Más sentir, menos explicar",
    mensaje: "Géminis, tu mente va más rápido que tu cuerpo, y eso esta semana se nota. Estás acumulando ideas, dudas, estímulos... pero tu corazón pide silencio. No todo lo que te incomoda se soluciona hablando. Haz espacio para sentir sin necesidad de traducir. En la pausa, encontrarás la coherencia que buscabas."
  },
  cancer: {
    titulo: "Mostrar lo que te hace humano",
    mensaje: "Tu sensibilidad es un don, Cáncer, y esta semana lo recordarás. Puede que te sientas más vulnerable de lo habitual, pero eso no es debilidad: es verdad. Si te abres, podrías recibir una ternura inesperada. No te escondas. Tu forma de sentir puede inspirar a otros, incluso si no lo sabes."
  },
  leo: {
    titulo: "El valor de quedarte",
    mensaje: "Leo, tú sueles avanzar, brillar, liderar… pero esta semana el poder está en permanecer. Una situación te invitará a no actuar, a simplemente estar presente. Eso también es liderazgo. Tu intuición se agudiza cuando el ego calla. Quédate. Escucha. No hace falta que te vean para que valgas."
  },
  virgo: {
    titulo: "El orden nace del caos interno",
    mensaje: "Virgo, algo en tu interior pide un reinicio. Estás tratando de ordenar lo que se está transformando, y eso puede frustrarte. Esta semana, permite que algo se rompa, incluso si no sabes cómo recomponerlo. La renovación empieza cuando dejas de forzar. El nuevo orden será más honesto contigo."
  },
  libra: {
    titulo: "Reconciliarte con lo incómodo",
    mensaje: "Libra, esta semana te toca dejar de sostener lo que ya no fluye. Hay un desequilibrio que viene pidiendo atención desde hace tiempo. No intentes maquillarlo. Si lo aceptas, verás que el caos no es un enemigo, sino un aviso. Puedes volver a encontrar tu centro, pero no será el mismo de antes."
  },
  escorpio: {
    titulo: "El silencio que guía",
    mensaje: "Escorpio, esta semana tu fuerza está en no decir nada. Hay cosas que ya sabes, aunque no las puedas explicar. Un presentimiento, una emoción persistente o un sueño repetido pueden darte pistas más valiosas que cualquier conversación. Confía en ese murmullo interno. Tiene más verdad que el ruido externo."
  },
  sagitario: {
    titulo: "Lo que dices transforma",
    mensaje: "Sagitario, esta semana tu voz tiene un peso especial. Lo que digas resonará más de lo habitual, así que elige bien tus palabras. Hay alguien que necesita escucharte desde tu autenticidad. No adornes, no exageres. Sé directo desde el corazón, y verás que tu fuego puede iluminar y no solo quemar."
  },
  capricornio: {
    titulo: "Desarmarte es necesario",
    mensaje: "Capricornio, tú sueles tener control, estructura, metas claras. Pero esta semana algo más sutil se impone. No todo lo importante se planifica. Lo esencial puede llegar como intuición, como emoción. Permítete no tenerlo todo claro. El mensaje llegará si te permites bajar la guardia y escuchar sin defensas."
  },
  acuario: {
    titulo: "Romper tu propio molde",
    mensaje: "Acuario, has crecido tanto que algunas de tus ideas ya no te contienen. Esta semana puedes sentirte incómodo con cosas que antes te definían. No es crisis: es evolución. Dale permiso a lo nuevo, incluso si no sabes qué es aún. Tu mente creativa necesita espacio para moverse sin juicio."
  },
  piscis: {
    titulo: "Volver a ti sin disolverte",
    mensaje: "Piscis, has estado absorbiendo mucho del entorno, y ahora necesitas volver a tu centro. Esta semana puedes poner límites desde la calma, no desde el miedo. Recuperar tu claridad no significa cerrarte, sino cuidar tu energía. Escúchate antes de entregarte. Tu sensibilidad también merece protección."
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
