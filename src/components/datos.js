const listaMascotas = [
    {
        id         : 0,
        imagen     : "https://i.imgur.com/e1vzT4a.jpeg",
        especie    : "Perro",
        genero     : "Macho",
        edad       : "Mayor",
        descripcion: "Nuestro primer perro rescatado de la calle. Tierno y tonton, pero muy leal y cariñoso",
        estado     : "Perdidos",
        nombre     : "Patita",
        owner      : 0,
        donacion   : 100 
    },
    {
        id         : 1,
        imagen     : "https://i.imgur.com/6LZx8Hk.jpeg",
        especie    : "Gato",
        genero     : "Hembra",
        edad       : "Mayor",
        descripcion: "La primera gata de la casa y fué la mejor! Es de River",
        estado     : "Perdidos",
        nombre     : "Minina",
        owner      : 2,
        donacion   : 100 
    },
    {
        id         : 2,
        imagen     : "https://i.imgur.com/bTt1zyT.jpeg",
        especie    : "Gato",
        genero     : "Macho",
        edad       : "Mayor",
        descripcion: "Se perdió un día. Esperemos que siga bien. Es muy cariñoso e inteligente",
        estado     : "Perdidos",
        nombre     : "Matute",
        owner      : 0,
        donacion   : 100 
    },
    {
        id         : 3,
        imagen     : "https://i.imgur.com/1YxIPfo.jpeg",
        especie    : "Gato",
        genero     : "Hembra",
        edad       : "Mayor",
        descripcion: "Ella sigue siendo fuerte, cariñosa y fiel. Maulla y sabe pedir la comida",
        estado     : "Adoptados",
        nombre     : "Monina",
        owner      : 0,
        donacion   : 100 
    },
    {
        id         : 4,
        imagen     : "https://i.imgur.com/iEGNmVy.jpeg",
        especie    : "Gato",
        genero     : "Macho",
        edad       : "Adulto",
        descripcion: "Gato Alfa, Obero, cabulero para pedir comida y mea todo lo que encuentra. Es igual a Nacho Scocco",
        estado     : "Adoptados",
        nombre     : "Loki",
        owner      : 0,
        donacion   : 100 
    },
    {
          id         : 5,
          imagen     : "https://i.imgur.com/fsOjPOD.jpeg",
          especie    : "Gato",
          genero     : "Macho",
          edad       : "Cachorro",
          descripcion: "Miedoso y timido. Adoptado de la calle, se cuida mucho pero es muy cariñoso. Tiene otra casa también.",
          estado     : "Adoptados",
          nombre     : "Simba",
          owner      : 1,
          donacion : 100 
     },
     {
          id         : 6,
          imagen     : "https://i.imgur.com/jeRgAdE.jpeg",
          especie    : "Gato",
          genero     : "Macho",
          edad       : "Cachorro",
          descripcion: "Gato negro, gordo, tonto y feo. Nah, mentira. Es orgulloso por ser el único que entra a la casa. Es de Boca",
          estado     : "Adoptados",
          nombre     : "Tchaikovsky",
          owner      : 1,
          donacion : 100 
     },
     {
          id         : 7,
          imagen     : "https://i.imgur.com/RieFQTV.jpeg",
          especie    : "Perro",
          genero     : "Macho",
          edad       : "Cachorro",
          descripcion: "Del espacio le llegó algo muy especial, y lo atrapó y todos sus secretos el sabrá. Con superpoderes el ahora es BEN10",
          estado     : "Adopcion",
          nombre     : "Ben10",
          owner      : 1,
          donacion : 100 
     },
     {
          id         : 8,
          imagen     : "https://i.imgur.com/zrLNzMF.jpeg",
          especie    : "Perro",
          genero     : "Macho",
          edad       : "Cachorro",
          descripcion: "GROGUUU",
          estado     : "Adoptados",
          nombre     : "Grogu",
          owner      : 2,
          donacion : 100 
     },
     {
          id         : 9,
          imagen     : "https://i.imgur.com/dfb1f2z.jpeg",
          especie    : "Perro",
          genero     : "Hembra",
          edad       : "Mayor",
          descripcion: "Mili",
          estado     : "Adopcion",
          nombre     : "Mili",
          owner      : 2,
          donacion : 100 
     },
     {
          id         : 10,
          imagen     : "https://i.imgur.com/A0vbbnV.jpeg",
          especie    : "Perro",
          genero     : "Macho",
          edad       : "Adulto",
          descripcion: "Ponchi",
          estado     : "Perdidos",
          nombre     : "Ponchi",
          owner      : 1,
          donacion : 100 
     },
         {
          id         : 11,
          imagen     : "https://i.imgur.com/au0BJek.jpeg",
          especie    : "Perro",
          genero     : "Hembra",
          edad       : "Mayor",
          descripcion: "Violetita",
          estado     : "Adopcion",
          nombre     : "Violeta",
          owner      : 2,
          donacion : 100 
     },
     {
          id         : 12,
          imagen     : "https://i.imgur.com/YVWuzPj.jpeg",
          especie    : "Perro",
          genero     : "Hembra",
          edad       : "Mayor",
          descripcion: "Wendy",
          estado     : "Adopcion",
          nombre     : "Wendy",
          owner      : 1,
          donacion : 100 
     }
]

export const getMascota = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(listaMascotas.find(mascota=> parseInt(mascota.id) === parseInt(id)))
        }, 1000)
    })
}

export const getMascotas = (estado) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            if(estado !== undefined){
                resolve(listaMascotas.filter(mascota=> mascota.estado===estado))
            }else
                resolve(listaMascotas)
        }, 1000)
    })
}