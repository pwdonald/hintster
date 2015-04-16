var jade = require('jade'),
    fs = require('fs');

module.exports = {
    reporter: function (errors) {
        var compile = jade.compileFile('./templates/main.template.jade');
        fs.writeFileSync('output.html', compile(errors));
    }
};
