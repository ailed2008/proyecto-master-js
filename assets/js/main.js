$(document).ready(function(){
    
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    // Posts
    var posts=[
        {
            title:'Perdí mi confianza',
            date: 'publicado el '+ moment().format('dddd ') + moment().date()+' de '+moment().format('MMMM')+' del '+ moment().format('YYYY'),
            content:'Perdí mi confianza, el miedo fue más grande y ya no volví a hablar de mi de la misma forma, tampoco me volví a ver igual en el espejo, sentí que todos esos años que había pasado habían sido una ilusión sobrevalorada de mis capacidades, estaba totalmente desarmada como si de un día para otro hubiese olvidado absolutamente todo lo que creía dominar.Muchas de esas balas me cruzaron por el pecho y por la espalda, me dejé llevar en silencio por "no estar a la altura" y no "dar la talla" en medio de todos esos "grandes" programadores. Ahí empezó mi síndrome del impostor'
        },
        {
            title:'Síndrome del impostor',
            // date: new Date(),
            // date:moment().format('MMMM Do YYYY, h:mm:ss a'),
            date: 'publicado el '+ moment().format('dddd ') + moment().date()+' de '+moment().format('MMMM')+' del '+ moment().format('YYYY'),
            content:'Un día la magia ocurrió, pero en realidad no fue magia, apliqué en silencio a un único lugar donde se requería todo lo que yo antes había usado así que me reté a mí misma, silencié todas las voces fuera de mi y me concentré en la voz de mi mente. Hice la prueba, logré el trabajo, por supuesto mejoró mis ingresos pero lo más importante es que volví a sentirme útil. Entendí que a veces el ego de los demás perturba demasiado, pero el primer error es subirle el volumen a las voces ajenas y silenciar la tuya.'
        },
    ];
    
    posts.forEach((item, index)=>{
        var post =`
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>
        </article>
        `;
        $("#posts").append(post);
    })
    
});