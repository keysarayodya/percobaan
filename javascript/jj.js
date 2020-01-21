$(document).ready(function(){
    $("#catatan").click(function(){
        $("#tambah").slideDown("slow");
    });
});

        // modal untuk kupon


$(document).ready(function(){
    $(".kupon").click(function(){
        $("input.kupon").slideToggle("slow");
    });
});

     jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});


$(document).ready(function(){
    $("img.cari").click(function(){
        $("input.cari").slideToggle("slow");
    });
});

 var modal = document.getElementById('login');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    var modal = document.getElementById('register');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";

            }
        }