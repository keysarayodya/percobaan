$(document).ready(function () {
    var jam = 5;
    var menit = 40;
    var detik = 20;

    function hitung() {
        setTimeout(hitung, 1000);
        $('#tampilkan').html('Flash sale : ' + jam + ':' + menit + ':' + detik);
        detik--;
        if (detik < 0) {
            detik = 59;
            menit--;
            if (menit < 0) {
                detik = 0;
                menit = 0;
                jam--;
                if (jam < 1) {
                    detik = 59;
                    menit = 59;
                    jam = 59;
                }
            }
        }
    }
    hitung();
});

$(document).ready(function () {
    var jam = 50;
    var menit = 20;
    var detik = 0;

    function hitung() {
        setTimeout(hitung, 1000);
        $('.tampilkan').html(jam + ' : ' + menit + ' : ' + detik);
        detik--;
        if (detik < 0) {
            detik = 59;
            menit--;
            if (menit < 0) {
                detik = 0;
                menit = 0;
                jam--;
                if (jam < 1) {
                    detik = 59;
                    menit = 59;
                    jam = 59;
                }
            }
        }
    }
    hitung();
});