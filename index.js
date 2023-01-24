        $(document).ready(function () {
            const liffId = "1657823453-nJXGrJ00";
            initializeLiff(liffId);
        })

        function initializeLiff(liffId) {
            liff.init({
                liffId: liffId
            }).then(() => {
                initializeApp();
            }).catch((err) => {
                console.log('LIFF Initialization failed ', err);
            });
        }

        function sendText(text) {
            liff.sendMessages([{
                'type': 'text',
                'text': text
            }]).then(function () {
                liff.closeWindow();
            }).catch(function (error) {
                window.alert('Failed to send message ' + error);
            });
        }

        const params = (new URL(document.location)).searchParams;
        const key = params.get('key');

        $(function () {
            $('form').submit(function () {
                const name    = $('input[name="name"]').val();
                const udetate = $('select[name="udetate"]').val();
                const fukkin  = $('input[name="fukkin"]').val();
                const haikin  = $('input[name="haikin"]').val();
                const sukuwat = $('input[name="sukuwat"]').val();
                const msg = `${name}\n${udetate}\n${fukkin}\n${haikin}\n${sukuwat}`;
                sendText(msg);
                return false;
            });
        });
