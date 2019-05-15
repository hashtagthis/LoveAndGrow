(function () {
    'use strict';
    var AmaCreceScripts;

    AmaCreceScripts = function () {
        var me = this;
        me.Eventos = {
            mostrarPersonaCertificado: function (e) {
                e.preventDefault();
                let seEncontro = `<h3>¡Felicitaciones!</h3><p>Tenemos tu certificado en base, no te olvides de contactar con Liderman.</p>`
                let noSeEcontro = `<p>No contamos con ningún registro tuyo en nuestra base de datos. Ponte en contacto con para cualquier consulta.</p>`
                let valorDNI = $('#numeroDocumentoCertificado').val();
                let json = JSON.parse($.getJSON({
                    'url': "https://raw.githubusercontent.com/hashtagthis/testing_jsons/master/certis.json",
                    'async': false
                }).responseText);
                if (json.find(x => x.dni === valorDNI)) {
                    $('#respuestaBD').html(seEncontro);
                } else {
                    $('#respuestaBD').html(noSeEcontro);
                }
            },
            validarMaximoDNI: function () {
                var regex = /^([0-9])?$/;
                if (!regex.test($(this).val())) {
                    $(this).val($(this).val().replace(/[^0-9]/g, ''));
                }
            }

        };
        me.Funciones = {
            InicializarEventos: function () {
                $('body').on('click', '#buscarCertificados', me.Eventos.mostrarPersonaCertificado);
                $('body').on('keyup', '#numeroDocumentoCertificado', me.Eventos.validarMaximoDNI);
            },
            InicializarProcesosOnLoad: function () {
            }
        }
        me.Inicializar = function () {
            me.Funciones.InicializarEventos();
            me.Funciones.InicializarProcesosOnLoad();
        }
    }
    AmaCreceScripts = new AmaCreceScripts();
    AmaCreceScripts.Inicializar();

})(window);