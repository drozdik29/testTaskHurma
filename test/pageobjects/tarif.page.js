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

    get recrFormRecrTMoreBtn(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[2]/div[3]/div/div/span[1]')
    }

    get recrFormAllTMoreBtn(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[2]/div/span[1]')
    }

    get employeesFormAll(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[1]/div/select')
    }

    get employees31All(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[1]/div/select/option[2]')
    }

    get employees51All(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[1]/div/select/option[3]')
    }

    get employees101All(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[1]/div/select/option[4]')
    }

    get employees151All(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[1]/div/select/option[5]')
    }

    get employees201All(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[1]/div/select/option[6]')
    }

    get employees251All(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[1]/div[3]/div[1]/div/select/option[7]')
    }

    get employeesFormHr(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[3]/div[3]/div/div/select')
    }

    get employees31Hr(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[3]/div[3]/div/div/select/option[2]')
    }

    get employees51Hr(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[3]/div[3]/div/div/select/option[3]')
    }

    get employees101Hr(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[3]/div[3]/div/div/select/option[4]')
    }

    get employees151Hr(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[3]/div[3]/div/div/select/option[5]')
    }

    get employees201Hr(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[3]/div[3]/div/div/select/option[6]')
    }

    get employees251Hr(){
        return $('//*[@id="tariff-page"]/div[1]/div[2]/div[3]/div[3]/div/div/select/option[7]')
    }
    
    open() {
        return super.open('');
    }
}

module.exports = new TarPage();
