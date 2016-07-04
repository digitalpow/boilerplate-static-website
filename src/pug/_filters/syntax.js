module.exports = function (string) {
    var tabs;

    string = string
        .replace(/^(\r?\n)*/, '')
        .replace(/(\r?\n)*$/, '');
    tabs   = /^(\s*)/.exec(string)[0];
    string = string.replace(new RegExp('^' + tabs, 'gm'), '');

    string = string.trim();
    string = string
        .replace(/"(.*?)"/g,             '{string}"$1"{/string}')
        .replace(/'(.*?)'/g,             "{string}'$1'{/string}")
        .replace(/:(\s*)(\w*)([;\n])/g,  ":$1{string}$2{/string}$3")
        .replace(/\/\/ (.*)/g,           "{comment}// $1{/comment}")
        .replace(/(\/\*(.*)\*\/)/g,      '{comment}$1{/comment}')
        .replace(/(<!--(.*)-->)/g,       '{comment}$1{/comment}')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\{string\}/g,          '<span class="syntax-string">')
        .replace(/\{\/string\}/g,        '</span>')
        .replace(/\{comment\}/g,         '<span class="syntax-comment">')
        .replace(/\{\/comment\}/g,       '</span>');

    return '<pre class="syntax-block">' + string + '</pre>';
};
