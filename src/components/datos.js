const listaMascotas = [
    {
        id         : 0,
        imagen     : "https://i.imgur.com/e1vzT4a.jpeg",
        especie    : "Perro",
        genero     : "Macho",
        edad       : "Mayor",
        descripcion: "Nuestro primer perro rescatado de la calle. Tierno y tonton, pero muy leal y cariñoso",
        estado     : "Perdido",
        nombre     : "Patita",
        owner      : 0
    },
    {
        id         : 1,
        imagen     : "https://i.imgur.com/6LZx8Hk.jpeg",
        especie    : "Gato",
        genero     : "Hembra",
        edad       : "Mayor",
        descripcion: "La primera gata de la casa y fué la mejor! Es de River",
        estado     : "Perdido",
        nombre     : "Minina",
        owner      : 2
    },
    {
        id         : 2,
        imagen     : "https://i.imgur.com/bTt1zyT.jpeg",
        especie    : "Gato",
        genero     : "Macho",
        edad       : "Mayor",
        descripcion: "Se perdió un día. Esperemos que siga bien. Es muy cariñoso e inteligente",
        estado     : "Perdido",
        nombre     : "Matute",
        owner      : 0
    }
]

export const getMascotas = () =>{

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve(listaMascotas)
        }, 2000)

    })

}