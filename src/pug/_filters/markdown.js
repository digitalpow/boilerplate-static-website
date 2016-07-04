var marked = require('marked');

module.exports = function (string, options) {
    if (string.substr(-3) === '.md') {
        string = require('fs').readFileSync(string, 'utf8');
    }

    options = Object.assign({}, {
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    }, options);

    console.log(options);

    marked.setOptions(options);

    return marked(string);
};
