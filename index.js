$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-number').empty();
        var num = $('input[number="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-number').append(
                `<input class="form-control w-100 mt-1" name="number" maxlength="2">`
            );
        }
    });
    
        // 参加人数分の氏名欄を生成
    $('#form-num').click(function () {
        $('#form-num').empty();
        var num = $('input[num="num"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-num').append(
                `<input class="form-control w-100 mt-1" name="num" maxlength="2">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="number"]:checked').val();
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `希望日：${date}\n人数：${number}\n氏名：${names}`;
        sendText(msg);

        return false;
    });
});
