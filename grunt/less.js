module.exports = {

    options: {
        compress: true,
        optimization: 2,
        plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 6 versions", ">0.2%", "Firefox ESR", "not dead"]}),
            new (require('less-plugin-clean-css'))()
        ]
    },

    theme: {
        files: {
            "out/flow/src/css/styles.min.css": "build/less/flow.less"
        }
    },

    vendor: {
        files: {
            "out/flow/src/css/libs/jquery.flexslider.min.css": "build/vendor/jquery-flexslider2/less/flexslider.less"
        }
    }

};