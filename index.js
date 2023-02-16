$(function () {
	
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy年mm月dd日',
    // 昨日の日付以降を選択できなくする
            minDate:0
        });
    });


    // 予約フォームを表示する
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
	    
        var msg = `〓ご予約内容〓\n希望日：${date}\n\n時間：${minute}\n\nメニュー：${names}\n\n問い合わせ内容：${inquiries}`;
        sendText(msg);

        return false;
    });
	
    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="number"]:checked').val();
        var minute = $('select[name="minute"]').val();
        var names = $('select[name="names"]').val();
        var inquiries = $('textarea[name="inquiries"]').val();

	var msg = `ご連絡が遅れる場合がございますが、\n確認後に返信致します。`;
        sendText(msg);

        return false;
    });
});
