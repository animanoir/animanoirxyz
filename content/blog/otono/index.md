---
title: Jardines | Alquitrán EP (Experiencia VR)
date: "2019-11-11"
tags: [three.js, interactive, music]
description: Jardín virtual con orbes musicales.
thumbnail: ./otono.jpg
---

<div class='md-link'>

_Links:
[Experiencia VR](http://maremoto.mx/) |
[otono.space/jardines/](https://otono.space/jardines/)_

</div>

<hr>

**Alquitrán** es el EP del productor Jardines (Eduardo M. Márquez), artista multidisciplinario de Chihuahua, México, quien hace su debut en **OTONO**.

Para su promoción, Emmanuel Martinez y yo, Óscar. A. Montiel creamos una experiencia virtual basada en en la idea de un enorme jardín donde perderse, como lo puedes hacer con la música.

Para su desarrollo se empleó _Three.js_ como motor gráfico. En el lobby se optó por _Hydra_. Lo interesante fue encontrar una manera de embeber el canvas con Hydra de manera sencilla, así como mantener la densidad de píxeles adecuada.

![Jardines Alquitrán Animanoir Óscar A. Montiel VR](jardines-2.jpg)

La intención fue intentar sumergir al usuario dentro de un jardín virtual donde perderse sea parte de la aventura, la música siendo un tipo de guía con qué entender este mundo. Algo así como la vida real también.

El usuario puede moverse con el mouse o bien las teclas. Cada orbe es un _audioSource_ que, con la magia de Three.js, facilita la espacialización del audio: dependiendo de a dónde se mueva el usuario, se escuchará más cerca o más lejos la fuente musical.

![Jardines Alquitrán Animanoir Óscar A. Montiel VR](jardines-1.jpg)
