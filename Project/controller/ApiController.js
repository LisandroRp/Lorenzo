import { Component } from 'react';

var ip = '192.168.1.107';
var url = 'http://'+ip+':8080/apiAppEventos';

class ApiController extends Component {

    getPeliculas(okPeliculas, nombre) {
        let uri = url+'/getPeliculasByKey?key=' + nombre
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => alert("Intentar de nuevo")).
            then(data => {
                okPeliculas(data);
            }).catch((err) => alert("Intentar de nuevo"));
    }

    getEventos(okEventos) {
        let uri = url+'/getEventos'
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => alert("Intentar de nuevo")).
            then(data => {
                okEventos(data);
            }).catch((err) => alert("Intentar de nuevo"));
    }

    getDetalle(okDetalle, id) {
        let uri = url+'/getEventoById?id=' + id
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                okDetalle(data);
            }).catch((error) => console.log(error));
    }

    getSeries(okSeries, nombre) {
        let uri = url+'/getSeriesByKey?key=' + nombre
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                okSeries(data);
            }).catch((err) => console.log(err));
    }

    getComentarioByPelicula(okComentario, id) {
        let uri = url+'/getComentariosByPeliculaId?peliculaId=' + id
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => {
            console.log(err)
        }).
            then(data => {
                okComentario(data);
            }).catch((err => {
                console.log(err);
                alert("No existen Comentarios");
            }));
    }

    insertUsuario(name, lastName, email, user, password, okCreate) {
        let uri = url+'/insertUsuario/Usuario'
        fetch(uri, {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: name,
                apellido: lastName,
                email: email,
                username: user,
                password: password,
            })
        }).then((res) => {
            return res.json();
        }).catch((err) => console.log(err)).then((res) => {
            okCreate();
        }).catch((err) => console.log(err))

    }

    changePassword(user, pass, okChange) {
        let uri = url+'/updateUsuarioByPassword/Usuario'
        console.log('holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'+user+pass),
        fetch(uri, {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass }),
        }).then((res) => {
            return res.json();
        }).catch((err) => console.log('holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'+err)).then((res) => {
            okChange();
        }).catch((err) => console.log(err));
    }

    getUsuario(okUsuario, username) {
        let uri = url+'/getUsuarioByUsername?username=' + username
        
        fetch(uri).then(res => {
            console.log(res.body)
            return res.json()
        }).catch((err) => {
            console.log(err)

        }).
            then(data => {
                okUsuario(data);
            }).catch((err => {
                console.log(err);
                alert("No existe el usuario");
            }));
    }

    createComment(idUsuario, idEvento, descripcion, nombre,fecha, okComentario) {
        let uri =url+'/insertComentario/Comentario'
        console.log('judopppppppppppp')
        fetch(uri, {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                descripcion: descripcion,
                usuarioId: idUsuario,
                eventoId: idEvento,
                fecha: fecha,
                eventoNombre: nombre,
            }),
        }).then((res) => {
            return res.json();
        }).catch((err) => console.log(err)).then((res) => {
            okComentario();
        }).catch((err) => console.log(err));
    }

    getCommentByIdUser(userId, okComentario) {
        let uri = url+'/getComentariosByUsuario?usuarioId=' + userId
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => {
            console.log(err)
        }).
            then(data => {
                okComentario(data);
            }).catch((err => {
                console.log(err);
                alert("No existen Comentarios");
            }));
    }

}

export default new ApiController();