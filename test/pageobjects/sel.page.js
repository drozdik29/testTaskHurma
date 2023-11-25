const { $ } = require('@wdio/globals')
const Page = require('./page');


class SelectorPage extends Page {

    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new SelectorPage();
