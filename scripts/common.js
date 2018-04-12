(function(){
    $(function() {
        formValidate();
        $('#animate-all').click(()=>{
            $(document.body).addClass('animated');
        });
    });
})();




function formValidate() {
    var form = $('#contac-form');
    var regexp_name = /^[^\d_,.!@#$%^&*()-/*+=?~`\[\]\\<>]+$/i,
        regexp_email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        // regexp_phone = /^(\+?(\d){5,18})$/,
        inputFieldValue = '',
        FNAME_DATA = form.find('input[name=name]'),
        EMAIL_DATA = form.find('input[name=email]'),
        QUERY_DATA = form.find('input[name=query]'),
        BUTTON = form.find('button[type=submit]');

    fieldNameValidate(FNAME_DATA);
    fieldTextValidate(QUERY_DATA);
    // fieldNameValidate(LNAME_DATA);
    fieldEmailValidate(EMAIL_DATA);
    // fieldPhoneValidate(PHONE_DATA);
    formValidateOnClickSubmit();

    function errorCheckForFormFields() {
        if (
            EMAIL_DATA.val() != '' &&
            FNAME_DATA.val() != '' &&
            QUERY_DATA.val() != '' &&
            !EMAIL_DATA.hasClass('error') &&
            !FNAME_DATA.hasClass('error') &&
            !QUERY_DATA.hasClass('error')
        ){
            BUTTON.removeAttr('disabled');
            BUTTON.removeClass('disabled');
        }else{
            BUTTON.attr('disabled', 'disabled');
            BUTTON.addClass('disabled');
        }
    }


    function fieldNameValidate(field) {
        field.keyup(function() {
            inputFieldValue = field.val();
            if (!regexp_name.test(inputFieldValue)) {
                field.addClass('error');
                // BUTTON.attr('disabled', 'disabled').addClass('disabled');
            } else {
                field.removeClass('error');
            }
            errorCheckForFormFields();
        });

        field.blur(function() {
            inputFieldValue = field.val();

            if (inputFieldValue == '') {
                field.addClass('error');
            }
            errorCheckForFormFields();
        });
    }

    function fieldTextValidate(field){
        field.keyup(function() {
            inputFieldValue = field.val();

            if (inputFieldValue.length < 3) {
                field.addClass('error');
                // BUTTON.attr('disabled', 'disabled').addClass('disabled');
            } else {
                field.removeClass('error');
            }
            errorCheckForFormFields();
        });

        field.blur(function() {
            inputFieldValue = field.val();

            if (inputFieldValue == '') {
                field.addClass('error');
            }
            errorCheckForFormFields();
        });
    }

    function fieldEmailValidate(field) {
        field.keyup(function() {
            inputFieldValue = field.val();

            if (!regexp_email.test(inputFieldValue)) {
                field.addClass('error');
                // BUTTON.attr('disabled', 'disabled').addClass('disabled');
            } else {
                // console.log('111111111111111');
                field.removeClass('error');
            }
            errorCheckForFormFields();
        });

        field.blur(function() {
            inputFieldValue = field.val();

            if (inputFieldValue == '') {
                field.parent().addClass('error');
            }
            errorCheckForFormFields();
        });
    }

    // function fieldPhoneValidate(fieldPhone) {
    //     $(fieldPhone).keyup(function() {
    //         inputFieldValue = fieldPhone.val();
    //
    //         if (!regexp_phone.test(inputFieldValue)) {
    //             fieldPhone.parent().addClass('error');
    //             BUTTON.attr('disabled', 'disabled');
    //             BUTTON.addClass('disabled');
    //         } else {
    //             fieldPhone.parent().removeClass('error');
    //         }
    //         errorCheckForFormFields();
    //     });
    //
    //     fieldPhone.blur(function() {
    //         inputFieldValue = fieldPhone.val();
    //
    //         if (inputFieldValue == '') {
    //             fieldPhone.parent().addClass('error');
    //         }
    //     });
    // }

    function formValidateOnClickSubmit() {
        var contactForm = $('#contact-form'),
            BUTTON = $('button[type=submit]');

        BUTTON.click(function(e) {
            e.preventDefault();

            var formData = contactForm.serialize();

            $.ajax({
                type: 'post',
                url: '/sender.php',
                data: formData,
                success: function() {
                    // console.log('111 success');
                    form.parent().html('<div class="submit-result">Thanks. Your message was successfully sent.</div>');
                },
                error: function() {
                    // console.log('111 error');
                    form.parent().html('<div class="submit-result error">Error sending! Your message was not delivered.</div>');
                }
            });
        });
    }
}
