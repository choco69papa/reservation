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
        var num = $('select[name="number"]').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });
    
    
    
    document.querySelector('select[name="number"]').form.
    addEventLisetner('formdata', e => {
  if (e.formData.get('number') == '')
    e.formData.delete('number');
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
