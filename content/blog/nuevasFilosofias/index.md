---
title: Neofilosofias bot
tags: [bot, twitter, filosofía]
description: Un bot que concatena palabras, pero crea conciencias.
canonical: 'https://animanoir.xyz/neofilosofias-bot'
date: '2019-05-04'
---

Programar es un ejercicio que te pule la introspección. Te adentra hacia un existencialismo pocas veces comprendido— la computadora _nunca_ se equivoca. O al revés, _siempre_ acierta. Quien se "equivoca" es quien _percibe_ un error (¿realmente existen los errores?). Es decir, el programador mismo.

Por éso me interesé muchísimo en la filosofía. Es obvio que la computadora (aún) no se equivoca por incompetencia; hace lo que le ordenan. Este tipo de pensamientos me llevó a encontrarme a mí mismo como el artífice de mis propios éxitos y derrotas— la suerte se diseña. Por éso me adentré en el ~~depresivo~~ abismo que el amor al conocimiento provoca, y mi conciencia ha crecido de una manera exponencial. A veces, entre más conoces, más sentido tiene (o no) la vida.

Aprovechando que obtuve la API de Twitter (uno tiene que pedirles permiso) para el [proyecto](https://www.animanoir.xyz/Inmersiva) de [Hiperoráculo](https://hiperoraculo.glitch.me/) que realicé en colaboración con el equipo de [ZeYX](https://zeyxlab.com/), Doreen A. Ríos y Ricardo Sierra, se me ocurrió armar un bot que, básicamente, concatena _prefijos_, _doctrinas filosóficas_ y _adjetivos_ igual con tono filosófico. Ésta es una idea muy común, pero quería armarme uno para ver qué se sentía y cuál era el proceso.

<a class="twitter-timeline" data-height="444" data-theme="dark" href="https://twitter.com/neofilosofias?ref_src=twsrc%5Etfw">Tweets by neofilosofias</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

El bot está alojado en [Glitch](https://glitch.com/), plataforma que tras trabajar con ella a profundidad encuentro muy accesible y atractiva para proyectos así. La aplicación es una app de `Node.js` que ejecuta un `setInterval()` cada x horas llamando las instrucciones para combinar elementos individuales de los arreglos `prefijos`, `doctrinas` y `adjetivos`. Al final ejecuta la función `post` de la librería `twit` (con mis datos de acceso) y voilá, un nuevo concepto que ampliará nuestra conciencia.

El proyecto está alojado en [GitHub](https://github.com/animanoir/neofilosofias-bot).
