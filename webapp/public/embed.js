(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = null;

    var newblocks = /newblocks=1/i.test(window.location.href);

    var scripts = [
        "/blb/highlight.js/highlight.pack.js",
        "/blb/bluebird.min.js",
        "/blb/typescript.js",
        "/blb/semantic.js",
        "/blb/marked/marked.min.js",
        "/blb/lzma/lzma_worker-min.js",
        newblocks ? "/blb/newblockly/blockly_compressed.js" : "/blb/blockly/blockly_compressed.js",
        newblocks ? "/blb/newblockly/blocks_compressed.js" : "/blb/blockly/blocks_compressed.js",
        newblocks ? "/blb/newblockly/msg/js/en.js" : "/blb/blockly/msg/js/en.js",
        "/blb/pxtlib.js",
        "/blb/pxtblocks.js",
        "/blb/pxteditor.js",
        "/blb/pxtsim.js",
        "/blb/target.js",
        "/blb/pxtrunner.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/blb/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
