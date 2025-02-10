function validateForm() {
    let razonSocial = document.getElementById("inputRazonSocial").value;
    let rfc = document.getElementById("inputRFC").value;
    let telefono = document.getElementById("phone").value;
    let contacto = document.getElementById("inputContacto").value;
    let email = document.getElementById("inputEmail").value;

    if(razonSocial.length > 32){
        Swal.fire({
            title: 'Oops...',
            icon: 'error',
            text: 'La razón social no debe tener mas de 32 caracteres',
            confirmButtonText: 'Ok'
        })
        return false;
    }

    let rfcRegex = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/;
    if (!rfcRegex.test(rfc)) {
        Swal.fire({
            title: 'Oops...',
            icon: 'error',
            text: 'El RFC no tiene un formato correcto',
            confirmButtonText: 'Ok'
        })
        return false;
    }

    let telRegex = /^[0-9 ]{10,12}$/;
    if (!telRegex.test(telefono.replace(/\s+/g, ''))) {
        Swal.fire({
            title: 'Oops...',
            icon: 'error',
            text: 'El teléfono debe tener de 10 a 12 dígitos.',
            confirmButtonText: 'Ok'
        })
        return false;
    }    

    if(contacto.length > 32 ){
        Swal.fire({
            title: 'Opps',
            icon: 'error',
            text: 'El contacto no debe tener mas de 32 caracteres',
            confirmButton: 'Ok'
        })
        return false;
    }
    
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            title: 'Oops...',
            icon: 'error',
            text: 'El email no tiene un formato correcto',
            confirmButtonText: 'Ok'
        })
        return false;
    }
    

    
    return true;
}

