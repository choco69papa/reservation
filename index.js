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
        for (i = 0; i < number; i++) {
            $('#form-number').append(
                `<input class="form-control w-100 mt-1" name="number" maxlength="1">`
            );
        }
    });

    
    
    
  $(function(){
    $('#btn').click(function() {
      var v = $('[name=name1] option:selected').text();
      alert(v);
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

        var msg = `希望日：${date}\n時間：${name1}\nメニュー：${names}`;
        sendText(msg);

        return false;
    });
});
