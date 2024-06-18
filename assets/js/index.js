const propiedades_alquiler = [
    {
        nombre: 'Apartamento Ejecutivo',
        src: 'https://i.pinimg.com/564x/34/8b/ef/348befc3f02796d35ca7c16dc11b8489.jpg',
        descripcion: 'Lujoso apartamento ideal para ejecutivos.',
        ubicacion: 'Dubái, Emiratos Árabes Unidos',
        habitaciones: 3,
        costo: 1500000,
        smoke: true,
        pets: false
    },{
        nombre: 'Casa Colonial',
        src: 'https://i.pinimg.com/564x/6c/9f/dc/6c9fdcacc61665dad4d7e6fc9391b35c.jpg',
        descripcion: 'Historica casa con detalles coloniales.',
        ubicacion: 'Cartagena, Colombia',
        habitaciones: 4,
        costo: 700000,
        smoke: false,
        pets: true
    },{
        nombre: 'Apartamento de Playa',
        src: 'https://i.pinimg.com/564x/f9/c7/9f/f9c79f33e64cb134e82db43b0d0b9f6d.jpg',
        descripcion: 'Moderno apartamento a pasos de la playa.',
        ubicacion: 'Miami, Estados Unidos',
        habitaciones: 1,
        costo: 250000,
        smoke: true,
        pets: false
    },{
        nombre: 'Chalet en la Montaña',
        src: 'https://i.pinimg.com/564x/65/c6/38/65c638b81d2ad0f9b208213165f313e7.jpg',
        descripcion: 'Chalet alpino perfecto para los amantes del esquí.',
        ubicacion: 'Alpes Suizos',
        habitaciones: 6,
        costo: 800000,
        smoke: true,
        pets: false
    }
    ]
const propiedades_ventas = [
    {
        nombre: 'Penthouse de Lujo',
        src: 'https://i.pinimg.com/564x/b1/71/b8/b171b85d680d1ad4c7d0cb009adfcb44.jpg',
        descripcion: 'Elegante penthouse con vista panorámica a la ciudad.',
        ubicacion: 'Nueva York, Estados Unidos',
        habitaciones: 5,
        costo: 3500000,
        smoke: false,
        pets: false
    },{
        nombre: 'Casa Rural',
        src: 'https://i.pinimg.com/564x/28/bb/08/28bb0890f9412efd01b66f5c049ca582.jpg',
        descripcion: 'Encantadora casa de campo rodeada de naturaleza.',
        ubicacion: 'Toscana, Italia',
        habitaciones: 3,
        costo: 500000,
        smoke: false,
        pets: true
    },{
        nombre: 'Apartamento Moderno',
        src: 'https://i.pinimg.com/564x/1e/eb/ff/1eebff1a7ea156856a7324a0fbc4059b.jpg',
        descripcion: 'Acogedor apartamento en el centro de la ciudad.',
        ubicacion: 'Madrid, España',
        habitaciones: 2,
        costo: 300000,
        smoke: true,
        pets: false
    },{
        nombre: 'Villa del Sol',
        src: 'https://i.pinimg.com/736x/44/ae/24/44ae24017b1781477f824cd36afb0531.jpg',
        descripcion: 'Espectacular villa con vista al mar Caribe.',
        ubicacion: 'Playa del Carmen, México',
        habitaciones: 4,
        costo: 1200000,
        smoke: false,
        pets: true
    }
    ]
    
const alquiler = document.querySelector("#alquile")
const  ventas= document.querySelector("#ventas")

    let html =""

if (ventas !== null){
    for(let venta of propiedades_ventas){
        if(venta.smoke ==false && venta.pets == false){
            html +=`
            <div class="col-md-4 mb-4">
                <div class="card">
                <img src="${venta.src}"
                    class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${venta.nombre} </h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p>
                    <i class="fas fa-map-marker-alt"> ${venta.ubicacion}</i>
                    </p>
                    <p>
                    <i class="fas fa-bed">${venta.habitaciones}</i>
                    <i class="fas fa-bath">${venta.habitaciones}</i>
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                    <p class="text-danger">
                    <i class="fas fa-smoking-ban">Prohinido Fumar</i></p>
                    <p class="text-danger">
                    <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>
                </div>
                </div>
                </div>
            `
        }else if(venta.smoke ==true && venta.pets == false){
            html +=`
            <div class="col-md-4 mb-4">
                <div class="card">
                <img src="${venta.src}"
                    class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${venta.nombre} </h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p>
                    <i class="fas fa-map-marker-alt"> ${venta.ubicacion}</i>
                    </p>
                    <p>
                    <i class="fas fa-bed">${venta.habitaciones}</i>
                    <i class="fas fa-bath">${venta.habitaciones}</i>
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                    <p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                    </p>
                    <p class="text-danger">
                    <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>
                </div>
                </div>
                </div>
            `
        }else if(venta.smoke ==false && venta.pets == true){
            html +=`
            <div class="col-md-4 mb-4">
                <div class="card">
                <img src="${venta.src}"
                    class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${venta.nombre} </h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p>
                    <i class="fas fa-map-marker-alt"> ${venta.ubicacion}</i>
                    </p>
                    <p>
                    <i class="fas fa-bed">${venta.habitaciones}</i>
                    <i class="fas fa-bath">${venta.habitaciones}</i>
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                    <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> Prohinido fumar
                    </p>
                    <p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas</p>
                </div>
                </div>
                </div>
            `
        }else{
               html +=`
        <div class="col-md-4 mb-4">
            <div class="card">
            <img src="${venta.src}"
                class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${venta.nombre} </h5>
                <p class="card-text">${venta.descripcion}</p>
                <p>
                <i class="fas fa-map-marker-alt"> ${venta.ubicacion}</i>
                </p>
                <p>
                <i class="fas fa-bed">${venta.habitaciones}</i>
                <i class="fas fa-bath">${venta.habitaciones}</i>
                </p>
                <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                <p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                <p class="text-success">
                <i class="fas fa-paw></i> Mascotas permitidas
                </p>
            </div>
            </div>
            </div>
        `     
        }
        
    }
    ventas.innerHTML =  html
}
    if (alquiler !== null){
        for(let alquila of propiedades_alquiler){
            if(alquila.smoke ==false && alquila.pets == false){
                html +=`
                <div class="col-md-4 mb-4">
                    <div class="card">
                    <img src="${alquila.src}"
                        class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${alquila.nombre} </h5>
                        <p class="card-text">${alquila.descripcion}</p>
                        <p>
                        <i class="fas fa-map-marker-alt"> ${alquila.ubicacion}</i>
                        </p>
                        <p>
                        <i class="fas fa-bed">${alquila.habitaciones}</i>
                        <i class="fas fa-bath">${alquila.habitaciones}</i>
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${alquila.costo}</p>
                        <p class="text-danger">
                        <i class="fas fa-smoking-ban">Prohinido Fumar</i></p>
                        <p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                        </p>
                    </div>
                    </div>
                    </div>
                `
            }else if(alquila.smoke ==true && alquila.pets == false){
                html +=`
                <div class="col-md-4 mb-4">
                    <div class="card">
                    <img src="${alquila.src}"
                        class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${alquila.nombre} </h5>
                        <p class="card-text">${alquila.descripcion}</p>
                        <p>
                        <i class="fas fa-map-marker-alt"> ${alquila.ubicacion}</i>
                        </p>
                        <p>
                        <i class="fas fa-bed">${alquila.habitaciones}</i>
                        <i class="fas fa-bath">${alquila.habitaciones}</i>
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${alquila.costo}</p>
                        <p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                        </p>
                        <p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                        </p>
                    </div>
                    </div>
                    </div>
                `
            }else if(alquila.smoke ==false && alquila.pets == true){
                html +=`
                <div class="col-md-4 mb-4">
                    <div class="card">
                    <img src="${alquila.src}"
                        class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${alquila.nombre} </h5>
                        <p class="card-text">${alquila.descripcion}</p>
                        <p>
                        <i class="fas fa-map-marker-alt"> ${alquila.ubicacion}</i>
                        </p>
                        <p>
                        <i class="fas fa-bed">${alquila.habitaciones}</i>
                        <i class="fas fa-bath">${alquila.habitaciones}</i>
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${alquila.costo}</p>
                        <p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> Prohinido fumar
                        </p>
                        <p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas</p>
                    </div>
                    </div>
                    </div>
                `
            }else{
                   html +=`
            <div class="col-md-4 mb-4">
                <div class="card">
                <img src="${alquila.src}"
                    class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${alquila.nombre} </h5>
                    <p class="card-text">${alquila.descripcion}</p>
                    <p>
                    <i class="fas fa-map-marker-alt"> ${alquila.ubicacion}</i>
                    </p>
                    <p>
                    <i class="fas fa-bed">${alquila.habitaciones}</i>
                    <i class="fas fa-bath">${alquila.habitaciones}</i>
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${alquila.costo}</p>
                    <p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                    </p>
                    <p class="text-success">
                    <i class="fas fa-paw></i> Mascotas permitidas
                    </p>
                </div>
                </div>
                </div>
            `     
            }
            
        }
    alquiler.innerHTML =  html
}