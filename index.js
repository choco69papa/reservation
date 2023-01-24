$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy年mm月dd日',
            minDate: 0
        });
    });
    $(function(){ $(“#datepicker”).datepicker(); $(“#datepicker”).datepicker(‘option’,’beforeShowDay’,function(date){ var ret = [(date.getDay() != 1 && date.getDay() != 6)]; return ret; });});

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var date = $('input[name="date"]').val();
        var num = $('input[name="number"]:checked').val();
        var minute = $('select[name="minute"]').val();
        var names = $('select[name="names"]').val();
        var inquiries = $('textarea[name="inquiries"]').val();
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="number"]:checked').val();
        var minute = $('select[name="minute"]').val();
        var names = $('select[name="names"]').val();
        var inquiries = $('textarea[name="inquiries"]').val();

        var msg = `希望日：${date}\n時間：${minute}\nメニュー：${names}\n問い合わせ内容：${inquiries}`;
        sendText(msg);

        return false;
    });
});
