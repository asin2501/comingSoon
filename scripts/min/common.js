(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
    $(function () {
        formValidate();
        $('#animate-all').click(function () {
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
        if (EMAIL_DATA.val() != '' && FNAME_DATA.val() != '' && QUERY_DATA.val() != '' && !EMAIL_DATA.hasClass('error') && !FNAME_DATA.hasClass('error') && !QUERY_DATA.hasClass('error')) {
            BUTTON.removeAttr('disabled');
            BUTTON.removeClass('disabled');
        } else {
            BUTTON.attr('disabled', 'disabled');
            BUTTON.addClass('disabled');
        }
    }

    function fieldNameValidate(field) {
        field.keyup(function () {
            inputFieldValue = field.val();
            if (!regexp_name.test(inputFieldValue)) {
                field.addClass('error');
                // BUTTON.attr('disabled', 'disabled').addClass('disabled');
            } else {
                field.removeClass('error');
            }
            errorCheckForFormFields();
        });

        field.blur(function () {
            inputFieldValue = field.val();

            if (inputFieldValue == '') {
                field.addClass('error');
            }
            errorCheckForFormFields();
        });
    }

    function fieldTextValidate(field) {
        field.keyup(function () {
            inputFieldValue = field.val();

            if (inputFieldValue.length < 3) {
                field.addClass('error');
                // BUTTON.attr('disabled', 'disabled').addClass('disabled');
            } else {
                field.removeClass('error');
            }
            errorCheckForFormFields();
        });

        field.blur(function () {
            inputFieldValue = field.val();

            if (inputFieldValue == '') {
                field.addClass('error');
            }
            errorCheckForFormFields();
        });
    }

    function fieldEmailValidate(field) {
        field.keyup(function () {
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

        field.blur(function () {
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

        BUTTON.click(function (e) {
            e.preventDefault();

            var formData = contactForm.serialize();

            $.ajax({
                type: 'post',
                url: '/sender.php',
                data: formData,
                success: function success() {
                    // console.log('111 success');
                    form.parent().html('<div class="submit-result">Thanks. Your message was successfully sent.</div>');
                },
                error: function error() {
                    // console.log('111 error');
                    form.parent().html('<div class="submit-result error">Error sending! Your message was not delivered.</div>');
                }
            });
        });
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2NvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFVO0FBQ1AsTUFBRSxZQUFXO0FBQ1Q7QUFDQSxVQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBSTtBQUN4QixjQUFFLFNBQVMsSUFBWCxFQUFpQixRQUFqQixDQUEwQixVQUExQjtBQUNILFNBRkQ7QUFHSCxLQUxEO0FBTUgsQ0FQRDs7QUFZQSxTQUFTLFlBQVQsR0FBd0I7QUFDcEIsUUFBSSxPQUFPLEVBQUUsY0FBRixDQUFYO0FBQ0EsUUFBSSxjQUFjLHdDQUFsQjtBQUFBLFFBQ0ksZUFBZSxtREFEbkI7O0FBRUk7QUFDQSxzQkFBa0IsRUFIdEI7QUFBQSxRQUlJLGFBQWEsS0FBSyxJQUFMLENBQVUsa0JBQVYsQ0FKakI7QUFBQSxRQUtJLGFBQWEsS0FBSyxJQUFMLENBQVUsbUJBQVYsQ0FMakI7QUFBQSxRQU1JLGFBQWEsS0FBSyxJQUFMLENBQVUsbUJBQVYsQ0FOakI7QUFBQSxRQU9JLFNBQVMsS0FBSyxJQUFMLENBQVUscUJBQVYsQ0FQYjs7QUFTQSxzQkFBa0IsVUFBbEI7QUFDQSxzQkFBa0IsVUFBbEI7QUFDQTtBQUNBLHVCQUFtQixVQUFuQjtBQUNBO0FBQ0E7O0FBRUEsYUFBUyx1QkFBVCxHQUFtQztBQUMvQixZQUNJLFdBQVcsR0FBWCxNQUFvQixFQUFwQixJQUNBLFdBQVcsR0FBWCxNQUFvQixFQURwQixJQUVBLFdBQVcsR0FBWCxNQUFvQixFQUZwQixJQUdBLENBQUMsV0FBVyxRQUFYLENBQW9CLE9BQXBCLENBSEQsSUFJQSxDQUFDLFdBQVcsUUFBWCxDQUFvQixPQUFwQixDQUpELElBS0EsQ0FBQyxXQUFXLFFBQVgsQ0FBb0IsT0FBcEIsQ0FOTCxFQU9DO0FBQ0csbUJBQU8sVUFBUCxDQUFrQixVQUFsQjtBQUNBLG1CQUFPLFdBQVAsQ0FBbUIsVUFB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IihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIoZnVuY3Rpb24oKXtcbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3JtVmFsaWRhdGUoKTtcbiAgICAgICAgJCgnI2FuaW1hdGUtYWxsJykuY2xpY2soKCk9PntcbiAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ2FuaW1hdGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSkoKTtcblxuXG5cblxuZnVuY3Rpb24gZm9ybVZhbGlkYXRlKCkge1xuICAgIHZhciBmb3JtID0gJCgnI2NvbnRhYy1mb3JtJyk7XG4gICAgdmFyIHJlZ2V4cF9uYW1lID0gL15bXlxcZF8sLiFAIyQlXiYqKCktLyorPT9+YFxcW1xcXVxcXFw8Pl0rJC9pLFxuICAgICAgICByZWdleHBfZW1haWwgPSAvXihbYS16MC05X1xcLi1dKylAKFthLXowLTlfXFwuLV0rKVxcLihbYS16XFwuXXsyLDZ9KSQvLFxuICAgICAgICAvLyByZWdleHBfcGhvbmUgPSAvXihcXCs/KFxcZCl7NSwxOH0pJC8sXG4gICAgICAgIGlucHV0RmllbGRWYWx1ZSA9ICcnLFxuICAgICAgICBGTkFNRV9EQVRBID0gZm9ybS5maW5kKCdpbnB1dFtuYW1lPW5hbWVdJyksXG4gICAgICAgIEVNQUlMX0RBVEEgPSBmb3JtLmZpbmQoJ2lucHV0W25hbWU9ZW1haWxdJyksXG4gICAgICAgIFFVRVJZX0RBVEEgPSBmb3JtLmZpbmQoJ2lucHV0W25hbWU9cXVlcnldJyksXG4gICAgICAgIEJVVFRPTiA9IGZvcm0uZmluZCgnYnV0dG9uW3R5cGU9c3VibWl0XScpO1xuXG4gICAgZmllbGROYW1lVmFsaWRhdGUoRk5BTUVfREFUQSk7XG4gICAgZmllbGRUZXh0VmFsaWRhdGUoUVVFUllfREFUQSk7XG4gICAgLy8gZmllbGROYW1lVmFsaWRhdGUoTE5BTUVfREFUQSk7XG4gICAgZmllbGRFbWFpbFZhbGlkYXRlKEVNQUlMX0RBVEEpO1xuICAgIC8vIGZpZWxkUGhvbmVWYWxpZGF0ZShQSE9ORV9EQVRBKTtcbiAgICBmb3JtVmFsaWRhdGVPbkNsaWNrU3VibWl0KCk7XG5cbiAgICBmdW5jdGlvbiBlcnJvckNoZWNrRm9yRm9ybUZpZWxkcygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgRU1BSUxfREFUQS52YWwoKSAhPSAnJyAmJlxuICAgICAgICAgICAgRk5BTUVfREFUQS52YWwoKSAhPSAnJyAmJlxuICAgICAgICAgICAgUVVFUllfREFUQS52YWwoKSAhPSAnJyAmJlxuICAgICAgICAgICAgIUVNQUlMX0RBVEEuaGFzQ2xhc3MoJ2Vycm9yJykgJiZcbiAgICAgICAgICAgICFGTkFNRV9EQVRBLmhhc0NsYXNzKCdlcnJvcicpICYmXG4gICAgICAgICAgICAhUVVFUllfREFUQS5oYXNDbGFzcygnZXJyb3InKVxuICAgICAgICApe1xuICAgICAgICAgICAgQlVUVE9OLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBCVVRUT04ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgQlVUVE9OLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBCVVRUT04uYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGZpZWxkTmFtZVZhbGlkYXRlKGZpZWxkKSB7XG4gICAgICAgIGZpZWxkLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5wdXRGaWVsZFZhbHVlID0gZmllbGQudmFsKCk7XG4gICAgICAgICAgICBpZiAoIXJlZ2V4cF9uYW1lLnRlc3QoaW5wdXRGaWVsZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGZpZWxkLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIC8vIEJVVFRPTi5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2hlY2tGb3JGb3JtRmllbGRzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZpZWxkLmJsdXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbnB1dEZpZWxkVmFsdWUgPSBmaWVsZC52YWwoKTtcblxuICAgICAgICAgICAgaWYgKGlucHV0RmllbGRWYWx1ZSA9PSAnJykge1xuICAgICAgICAgICAgICAgIGZpZWxkLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JDaGVja0ZvckZvcm1GaWVsZHMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmllbGRUZXh0VmFsaWRhdGUoZmllbGQpe1xuICAgICAgICBmaWVsZC5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlucHV0RmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpO1xuXG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZFZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAvLyBCVVRUT04uYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmllbGQucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvckNoZWNrRm9yRm9ybUZpZWxkcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmaWVsZC5ibHVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5wdXRGaWVsZFZhbHVlID0gZmllbGQudmFsKCk7XG5cbiAgICAgICAgICAgIGlmIChpbnB1dEZpZWxkVmFsdWUgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2hlY2tGb3JGb3JtRmllbGRzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpZWxkRW1haWxWYWxpZGF0ZShmaWVsZCkge1xuICAgICAgICBmaWVsZC5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlucHV0RmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpO1xuXG4gICAgICAgICAgICBpZiAoIXJlZ2V4cF9lbWFpbC50ZXN0KGlucHV0RmllbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAvLyBCVVRUT04uYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJzExMTExMTExMTExMTExMScpO1xuICAgICAgICAgICAgICAgIGZpZWxkLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JDaGVja0ZvckZvcm1GaWVsZHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZmllbGQuYmx1cihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlucHV0RmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpO1xuXG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZFZhbHVlID09ICcnKSB7XG4gICAgICAgICAgICAgICAgZmllbGQucGFyZW50KCkuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvckNoZWNrRm9yRm9ybUZpZWxkcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBmaWVsZFBob25lVmFsaWRhdGUoZmllbGRQaG9uZSkge1xuICAgIC8vICAgICAkKGZpZWxkUGhvbmUpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgaW5wdXRGaWVsZFZhbHVlID0gZmllbGRQaG9uZS52YWwoKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYgKCFyZWdleHBfcGhvbmUudGVzdChpbnB1dEZpZWxkVmFsdWUpKSB7XG4gICAgLy8gICAgICAgICAgICAgZmllbGRQaG9uZS5wYXJlbnQoKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAvLyAgICAgICAgICAgICBCVVRUT04uYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAvLyAgICAgICAgICAgICBCVVRUT04uYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGZpZWxkUGhvbmUucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBlcnJvckNoZWNrRm9yRm9ybUZpZWxkcygpO1xuICAgIC8vICAgICB9KTtcbiAgICAvL1xuICAgIC8vICAgICBmaWVsZFBob25lLmJsdXIoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBpbnB1dEZpZWxkVmFsdWUgPSBmaWVsZFBob25lLnZhbCgpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoaW5wdXRGaWVsZFZhbHVlID09ICcnKSB7XG4gICAgLy8gICAgICAgICAgICAgZmllbGRQaG9uZS5wYXJlbnQoKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gZm9ybVZhbGlkYXRlT25DbGlja1N1Ym1pdCgpIHtcbiAgICAgICAgdmFyIGNvbnRhY3RGb3JtID0gJCgnI2NvbnRhY3QtZm9ybScpLFxuICAgICAgICAgICAgQlVUVE9OID0gJCgnYnV0dG9uW3R5cGU9c3VibWl0XScpO1xuXG4gICAgICAgIEJVVFRPTi5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IGNvbnRhY3RGb3JtLnNlcmlhbGl6ZSgpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvc2VuZGVyLnBocCcsXG4gICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcxMTEgc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnBhcmVudCgpLmh0bWwoJzxkaXYgY2xhc3M9XCJzdWJtaXQtcmVzdWx0XCI+VGhhbmtzLiBZb3VyIG1lc3NhZ2Ugd2FzIHN1Y2Nlc3NmdWxseSBzZW50LjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnMTExIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucGFyZW50KCkuaHRtbCgnPGRpdiBjbGFzcz1cInN1Ym1pdC1yZXN1bHQgZXJyb3JcIj5FcnJvciBzZW5kaW5nISBZb3VyIG1lc3NhZ2Ugd2FzIG5vdCBkZWxpdmVyZWQuPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==

//# sourceMappingURL=maps/common.js.map
