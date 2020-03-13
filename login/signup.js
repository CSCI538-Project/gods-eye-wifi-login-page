var FNAME_MAX = 50;
var LNAME_MAX = 50;
var PCODE_MAX = 12;
var EMAIL_MAX = 255;

var EMAIL_REGEX = /^(?!\.)((?!.*\.{2})[a-zA-Z0-9\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFFu20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF\.!#$%&'*+-/=?^_`{|}~\-\d]+)@(?!\.)([a-zA-Z0-9\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF\-\.\d]+)((\.([a-zA-Z\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF]){2,63})+)$/i;

var fnameValid = false;
var lnameValid = false;
var emailValid = false;
var pcodeValid = false;
var submitted = false;

$(document).ready(function() {
    $('#fname').keyup(function() {
        var fnameVal = $(this).val();
        if(fnameVal.length > FNAME_MAX) {
            $(this).val(fnameVal.substring(0, FNAME_MAX));
        }
    });

    $('#lname').keyup(function() {
        var lnameVal = $(this).val();
        if(lnameVal.length > LNAME_MAX) {
            $(this).val(lnameVal.substring(0, LNAME_MAX));
        }
    });

    $('#postcode').keyup(function(e) {
        var postcodeVal = $(this).val();
        if(!postcodeValid(postcodeVal)) {
            $(this).val(postcodeVal.substring(0, postcodeVal.length-1));
        }
        if(postcodeVal.length > PCODE_MAX) {
            $(this).val(postcodeVal.substring(0, PCODE_MAX));
        }
    });

    $('#email').keyup(function() {
        var emailVal = $(this).val();
        if(emailVal.length > EMAIL_MAX) {
            $(this).val(emailVal.substring(0, EMAIL_MAX));
        }
    });

    $('#lname, #postcode, #email').focusin(function() {
        validateFname();
    });

    $('#lname').focusout(function() {
        validateLname();
    });

    $('#postcode').focusout(function() {
        validatePostcode();
    });

    $('#email').focusout(function() {
        validateEmail();
    });

    $('#auth-form').submit(function( event ) {
        validateFname();
        validateLname();
        validatePostcode();

        if(!fnameValid || !lnameValid || !pcodeValid || !emailValid || submitted) {
            event.preventDefault();
            return false;
        }
        submitted = true;
    });

    // MacOS CNA
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("macintosh") != -1 && ua.indexOf("mozilla") != -1 && ua.indexOf("applewebkit") != -1 && ua.indexOf("safari") == -1) {
        $("body").css("zoom", "70%");
    }
});

function validateFname() {
    var fname = $('#fname').val();
    fnameValid = false;

    if(fname.length < 1) {
        inlineError('#fname', true, 'Please fill in this field');
    }
    else if(fname.length < 2) {
        inlineError('#fname', true, 'Please lengthen to 2 or more characters');
    }
    else {
        inlineError('#fname', false);
        fnameValid = true;
    }
}

function validateLname() {
    var lname = $('#lname').val();
    lnameValid = false;

    if(lname.length < 1) {
        inlineError('#lname', true, 'Please fill in this field');
    }
    else if(lname.length < 2) {
        inlineError('#lname', true, 'Please lengthen to 2 or more characters');
    }
    else {
        inlineError('#lname', false);
        lnameValid = true;
    }
}

function validatePostcode() {
    var postcode = $('#postcode').val();
    pcodeValid = false;

    if(postcode.length < 1) {
        inlineError('#postcode', true, 'Please fill in this field');
    }
    else if(postcode.length < 2) {
        inlineError('#postcode', true, 'Please lengthen to 2 or more characters');
    }
    else if(!postcodeValid(postcode)) {
        inlineError('#postcode', true, 'Only alphanumeric characters allowed');
    }
    else {
        inlineError('#postcode', false);
        pcodeValid = true;
    }
}

function validateEmail() {
    var email = $('#email').val();
    emailValid = false;

    if(email.length < 1) {
        inlineError('#email', true, 'Please fill in this field');
    }
    else if(email.length < 2) {
        inlineError('#email', true, 'Please lengthen to 2 or more characters');
    }
    else if(!EMAIL_REGEX.test(email)) {
        inlineError('#email', true, 'Please match the format requested');
    }
    else {
        inlineError('#email', false);

        $.ajax({
            method: "POST",
            url: '/email-validate',
            data: JSON.stringify({"Email": email, "Timeout": 5, "Verbose": "True"}),
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if(data.Certainty == "verified" || data.Certainty == "unknown" || data.VerboseOutput == "mailboxFull") {
                    emailValid = true;
                }
                else {
                    inlineError('#email', true, 'Please enter a valid email address');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                emailValid = true;
            }
        });
    }
}

function postcodeValid(postcode) {
    var reg = /^[A-Za-z\d\s]+$/;
    return reg.test(postcode);
}

function inlineError(elName, show, message) {
    var el = $(elName);
    var el_err = $(elName + '-err');

    if (!show) {
        el.removeClass('input-border-err');
        el.attr('aria-invalid', 'false');
        el_err.html('');
    }
    else {
        el_err.html(message);
        el.attr('aria-invalid', 'true');
        el.addClass('input-border-err');
        submitted = false;
    }
}