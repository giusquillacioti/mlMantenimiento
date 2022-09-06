
const nombre = document.getElementById('nombre'),
    email = document.getElementById('email'),
    localidad = document.getElementById('localidad'),
    mensaje = document.getElementById('mensaje'),
    btnEnviarForm = document.getElementById('btnEnviarForm');

const emailGoogle = 'mlmantenimientoedilicio@gmail.com';
const contraseñaGoogle = 'mlme2022!';

function validarEmail(email) {
    const validacion = /\S+@\S+\.\S+/;
    return validacion.test(email);
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (nombre.value != '' && email.value != '' && localidad.value != '' && mensaje.value != '') {
        if (validarEmail(email.value)) {

            btnEnviarForm.value = 'Enviando...';

            const serviceID = 'service_13psu5t';
            const templateID = 'template_nw7yaxb';
            const templateIDreply = 'template_sd3sc3d';


            emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnEnviarForm.value = 'Enviar';
                Swal.fire(`¡Gracias por comunicarte con nosotros!
                En los próximos días recibirás una respuesta a la dirección de correo electrónico ingresada.`);
            }, (err) => {
                btnEnviarForm.value = 'Enviar';
                Swal.fire(JSON.stringify(err));
            });

            emailjs.sendForm(serviceID, templateIDreply, this);

        } else {
            Swal.fire(`La dirección de correo electrónico no es válida.`);
        }
    } else {
        Swal.fire(`Todos los campos deben ser completados para enviar el formulario.`)
    }

});
