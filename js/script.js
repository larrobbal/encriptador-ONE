(function ($)
{
    "use strict";
    function encode_message()
    {
        const encode_button = document.querySelector('a#encoder-button');//encoder_button object
        const decode_button = document.querySelector('a#decoder-button');//decoder_button object
        const decode_copy = document.querySelector('a#decoder-copy-content');//decode_copy object
        const encode_copy = document.querySelector('a#encoder-copy-content');//encode_copy object
        const encode_clear = document.querySelector('a#encoder-clear-content');//encode_clear object
        const decode_clear = document.querySelector('a#decoder-clear-content');//decode_clear object
        const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ñ0123456789]/;
        
        encode_button.addEventListener('click',(e)=>//click event for encoder_button
        {
            e.preventDefault();
            var encoder_message = $('#encoder-message').val();
            if(encoder_message!="")
            {
                if(format.test(encoder_message)==false)
                {
                    $('#encoder-message').val($('#encoder-message').val().toLowerCase());
                    var encoded_msg = encoder_message.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
                    $('#decoder-message').val(encoded_msg.toLowerCase());
                }
                else
                {
                    var alert_mesaje = '<div class="encoder-alert-message">No se permiten caracteres especiales o números. Por favor introduce un mensaje válido</div>';
                    if($('#encoder-alert').children().length == 0)
                    {
                        $('#encoder-alert').append(alert_mesaje);
                    }
                }
            }
            else
            {
                var alert_mesaje = '<div class="encoder-alert-message">No se introdujo ningún mensaje. Por favor, introduce un mensaje válido</div>';
                if($('#encoder-alert').children().length == 0)
                {
                    $('#encoder-alert').append(alert_mesaje);
                }  
            }
        });
        encode_copy.addEventListener('click',(e)=>//Copy to clipboard decoded message
        {
            e.preventDefault();
            var encoder_message = $('#encoder-message').val();
            if(encoder_message!="")
                navigator.clipboard.writeText(encoder_message);
            else
            {
                var alert_mesaje = '<div class="encoder-alert-message">El campo se encuentra vacío, no hay nada que copiar...</div>';
                if($('#encoder-alert').children().length == 0)
                {
                    $('#encoder-alert').append(alert_mesaje);
                }
            }
        });
        encode_clear.addEventListener('click',(e)=>
        {
            e.preventDefault();
            $('#encoder-message').val('');
        });
        
        decode_button.addEventListener('click',(e)=>//click event for decoder_button
        {
            e.preventDefault();
            var decoder_message = $('#decoder-message').val();
            if(decoder_message!="")
            {
                if(format.test(decoder_message)==false)
                {
                    $('#decoder-message').val($('#decoder-message').val().toLowerCase());
                    var decoded_msg = decoder_message.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
                    $('#encoder-message').val(decoded_msg.toLowerCase());
                }
                else
                {
                    var alert_mesaje = '<div class="encoder-alert-message">No se permiten caracteres especiales o números. Por favor introduce un mensaje válido</div>';
                    if($('#decoder-alert').children().length == 0)
                    {
                        $('#decoder-alert').append(alert_mesaje);
                    }
                }
            }
            else
            {
                var alert_mesaje = '<div class="encoder-alert-message">No se introdujo ningún mensaje. Por favor, introduce un mensaje válido</div>';
                if($('#decoder-alert').children().length == 0)
                {
                    $('#decoder-alert').append(alert_mesaje);
                }  
            }
        });
        decode_copy.addEventListener('click',(e)=>//Copy to clipboard encoded message
        {
            e.preventDefault();
            var decoder_message = $('#decoder-message').val();
            if(decoder_message!="")
                navigator.clipboard.writeText(decoder_message);
            else
            {
                var alert_mesaje = '<div class="encoder-alert-message">El campo se encuentra vacío, no hay nada que copiar...</div>';
                if($('#decoder-alert').children().length == 0)
                {
                    $('#decoder-alert').append(alert_mesaje);
                } 
            }
        });
        decode_clear.addEventListener('click',(e)=>
        {
            e.preventDefault();
            $('#decoder-message').val('');
        });
    }
    $(document).ready(encode_message);
    $(document).ready(function()
    {
        const encode_field = document.getElementById('encoder-message');
        const decode_field = document.getElementById('decoder-message');
        encode_field.addEventListener('click',(e)=>
        {
            if($('#encoder-alert').children().length > 0)
                document.querySelector('#encoder-alert').removeChild(document.querySelector('#encoder-alert').firstChild);
        });
        decode_field.addEventListener('click',(e)=>
        {
            if($('#decoder-alert').children().length > 0)
                document.querySelector('#decoder-alert').removeChild(document.querySelector('#decoder-alert').firstChild);
        });
    });
})(jQuery);