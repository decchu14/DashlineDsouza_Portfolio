<html>
    <head>
        <title></title>
    </head>
    <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
        <script>
            var setVanta = () => {
                if (window.VANTA) window.VANTA.NET({
                el: ".s-page-1 .s-section-1 .s-section",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xf0162d,
                backgroundColor: 0x20202
                })
            }
        _strk.push(function () {
                setVanta()
            window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta)
        })
        </script>
    </body>
</html>


