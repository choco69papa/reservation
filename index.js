$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成

    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < number; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="number" maxlength="1">`
            );
        }
    });

    
    
            // 参加人数分の氏名欄を生成
    $('#form-num').click(function () {
    $('#btn').click(function() {
      var v = $('[name=num] option:selected').text();
      alert(v);
                `<input class="form-control w-100 mt-2" name="num" maxlength="2">`
  });
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

        var msg = `希望日：${date}\n時間：${num}\nメニュー：${names}`;
        sendText(msg);

        return false;
    });
});
