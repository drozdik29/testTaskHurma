const { expect } = require('@wdio/globals')
const TarPage = require('../pageobjects/tarif.page')

describe('Test task for Hurma', () => {
    before(async () => {
        TarPage.open('')
        browser.setWindowSize(1920, 1080)
    });

    it('should show how bigger will be price', async () => {
        const all3 = await TarPage.allInclusivePrice.getText()
        const rec3 = await TarPage.recruitmentPrice.getText()
            ; await TarPage.hrPrice.getText()

                (await TarPage.oneMonthBtn).click()
        await browser.pause(2000);
        const all1 = await TarPage.allInclusivePrice.getText()
        const rec1 = await TarPage.recruitmentPrice.getText()
        const hr1 = await TarPage.hrPrice.getText()
            (TarPage.sixMonthBtn).click()
        await browser.pause(2000);
        const all6 = await TarPage.allInclusivePrice.getText()
        const rec6 = await TarPage.recruitmentPrice.getText()
        const hr6 = await TarPage.hrPrice.getText()

            (TarPage.twelveMonthBtn).click()
        await browser.pause(2000);
        const all12 = await TarPage.allInclusivePrice.getText()
        const rec12 = await TarPage.recruitmentPrice.getText()
        const hr12 = await TarPage.hrPrice.getText()

        expect(all12).toBeLessThan(all6);
        expect(all6).toBeLessThan(all3);
        expect(all3).toBeLessThan(all1);

        expect(hr12).toBeLessThan(hr6);
        expect(hr6).toBeLessThan(hr3);
        expect(hr3).toBeLessThan(hr1);

        expect(rec12).toBeLessThan(rec6);
        expect(rec6).toBeLessThan(rec3);
        expect(rec3).toBeLessThan(rec1);

    })
    it('should show how bigger will be price with more recruiters in All Tariff', async () => {
        await TarPage.oneMonthBtn.click()
        await TarPage.recrFormAll.clearValue()
        await TarPage.recrFormAll.setValue(2)
        const twoRec = await TarPage.allInclusivePrice.getText()
            (await TarPage.recrFormAll).setValue(3)
        const threeRec = await TarPage.allInclusivePrice.getText()
            (await TarPage.recrFormAll).setValue(5)
        const fiveRec = await TarPage.allInclusivePrice.getText()
    })

    it('should show how bigger will be price with more recruiters in Recruitment Tariff', async () => {
        (await TarPage.recrFormRecr).clearValue()
        await TarPage.recrFormAll.setValue(2)
        const twoRecRecT = await TarPage.recruitmentPrice.getText()
            (await TarPage.recrFormAll).setValue(3)
        const threeRecRecT = await TarPage.recruitmentPrice.getText()
            (await TarPage.recrFormAll).setValue(5)
        const fiveRecRecT = await TarPage.recruitmentPrice.getText()
    })
})

