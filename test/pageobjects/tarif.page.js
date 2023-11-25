const { $ } = require('@wdio/globals')
const Page = require('./page');

class TarPage extends Page {

    get hrPrice() {
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[3]/div[2]/div[1]/span[2]')
    }

    get allInclusivePrice() {
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[2]/div[1]/span[2]')
    }

    get recruitmentPrice() {
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[2]/div[2]/div[1]/span[2]')
    }


    get oneMonthBtn() {
        return $('//*[@id="tariff-page"]/div[1]/div[1]/div[1]/div[1]');
    }
    get threeMonthBtn() {
        return $('//*[@id="tariff-page"]/div[1]/div[1]/div[1]/div[2]')
    }

    get sixMonthBtn() {
        return $('//*[@id="tariff-page"]/div[1]/div[1]/div[1]/div[3]')
    }
    get twelveMonthBtn() {
        return $('//*[@id="tariff-page"]/div[1]/div[1]/div[1]/div[4]')
    }

    get recrFormAll() {
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[2]/div/input')
    }

    get recrFormRecr() {
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[2]/div[3]/div/div/input')
    }

    open() {
        return super.open('');
    }
}

module.exports = new TarPage();
