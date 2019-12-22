module.exports = {

    fonts: {
        files: [
            {
                expand: true,
                flatten: true,
                src: [
                    'fontawesome-webfont.eot',
                    'fontawesome-webfont.svg',
                    'fontawesome-webfont.ttf',
                    'fontawesome-webfont.woff',
                    'fontawesome-webfont.woff2'
                ],
                filter: 'isFile',
                cwd: 'node_modules/font-awesome/fonts/',
                dest: 'out/flow/src/fonts/'
            },
            /* No need to copy FlexSlider fonts because replaced by FontAwesome
            {
                expand: true,
                src: '*',
                cwd: 'build/vendor/jquery-flexslider2/fonts/',
                dest: 'out/flow/src/fonts/'
            },
            */
            {
                expand: true,
                flatten: true,
                src: [
                    'default-skin.png',
                    'default-skin.svg',
                    'preloader.gif'
                ],
                filter: 'isFile',
                cwd: 'node_modules/photoswipe/dist/default-skin/',
                dest: 'out/flow/src/bg/'
            }
        ]
    }

};