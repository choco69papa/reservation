$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });


    
    
    
      $(function(){
    $('#form-number').click(function() {
      var v = $('[name=number]').val();
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

        var msg = `希望日：${date}\n人数：${number}\n氏名：${names}\n名：${name1}`;
        sendText(msg);

        return false;
    });
});
