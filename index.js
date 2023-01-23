$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });


      $(function(){
    $('#form-number').click(function() {
      var number = $('[name=number]').val();
      alert(v);
    });
  });
    

    

        // 参加人数分の氏名欄を生成
    $('#form-numbes').click(function () {
        $('#form-name').empty();
        var num = $('input[name="numbes"]:checked').val();
    });
    

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="number"]:checked').val();
        var numbes = $('input[name="numbes"]:checked').val();


        var msg = `希望日：${date}\n人数：${number}\n氏名：${numbes}`;
        sendText(msg);

        return false;
    });
});
