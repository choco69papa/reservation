$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
$('#form-number').click(function(){
        var text = $('.number').val();
        alert(text);
    });
});


$('#form-number').click(function(){
        var text = $('.number').val();
        alert(text);
    });
});

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="number"]:checked').val();
        var number = $('input[name="names"]:checked').val();

        var msg = `希望日：${date}\n人数：${number}\n氏名：${names}`;
        sendText(msg);

        return false;
    });
});
