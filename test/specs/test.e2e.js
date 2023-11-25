const { expect } = require('@wdio/globals')
const TarPage = require('../pageobjects/tarif.page')

describe('Test task for Hurma', () => {
    before(async () => {
        TarPage.open('')
        browser.setWindowSize(1920, 1080)
    });

    it('should show how bigger will be price', async () => {
        const all3 = await TarPage.allInclusivePrice.getText();
        const rec3 = await TarPage.recruitmentPrice.getText();
        const hr3 = await TarPage.hrPrice.getText();

        (await TarPage.oneMonthBtn).click();
        await browser.pause(2000);
        const all1 = await TarPage.allInclusivePrice.getText();
        const rec1 = await TarPage.recruitmentPrice.getText();
        const hr1 = await TarPage.hrPrice.getText();
        (TarPage.sixMonthBtn).click();
        await browser.pause(2000);
        const all6 = await TarPage.allInclusivePrice.getText();
        const rec6 = await TarPage.recruitmentPrice.getText();
        const hr6 = await TarPage.hrPrice.getText();

        (TarPage.twelveMonthBtn).click();
        await browser.pause(2000);
        const all12 = await TarPage.allInclusivePrice.getText();
        const rec12 = await TarPage.recruitmentPrice.getText();
        const hr12 = await TarPage.hrPrice.getText();

        expect(parseFloat(all12)).toBeLessThan(parseFloat(all6));
        expect(parseFloat(all6)).toBeLessThan(parseFloat(all3));
        expect(parseFloat(all3)).toBeLessThan(parseFloat(all1));

        expect(parseFloat(hr12)).toBeLessThan(parseFloat(hr6));
        expect(parseFloat(hr6)).toBeLessThan(parseFloat(hr3));
        expect(parseFloat(hr3)).toBeLessThan(parseFloat(hr1));

        expect(parseFloat(rec12)).toBeLessThan(parseFloat(rec6));
        expect(parseFloat(rec6)).toBeLessThan(parseFloat(rec3));
        expect(parseFloat(rec3)).toBeLessThan(parseFloat(rec1));


    })
    it('should show how bigger will be price with more recruiters in All Tariff', async () => {
        await TarPage.oneMonthBtn.click();
        const oneRec = parseFloat(await TarPage.allInclusivePrice.getText());
        console.log(oneRec);
        browser.pause(1000);
        (await TarPage.recrFormAllTMoreBtn).click();
        const twoRec = parseFloat(await TarPage.allInclusivePrice.getText());
        console.log(twoRec);
        (await TarPage.recrFormAllTMoreBtn).click();
        const threeRec = parseFloat(await TarPage.allInclusivePrice.getText());
        (await TarPage.recrFormAllTMoreBtn).click();
        (await TarPage.recrFormAllTMoreBtn).click();
        const fiveRec = parseFloat(await TarPage.allInclusivePrice.getText());
        expect(parseFloat(twoRec) - parseFloat(oneRec)).toBeGreaterThanOrEqual(45);
        expect(parseFloat(threeRec) - parseFloat(oneRec)).toBeGreaterThanOrEqual(90);
        expect(parseFloat(fiveRec) - parseFloat(oneRec)).toBeGreaterThanOrEqual(180);
    })

    it('should show how bigger will be price with more recruiters in Recruitment Tariff', async () => {
        await TarPage.recrFormRecrTMoreBtn.click();
        const twoRecRecT = parseFloat(await TarPage.recruitmentPrice.getText());
        await TarPage.recrFormRecrTMoreBtn.click();
        const threeRecRecT = parseFloat(await TarPage.recruitmentPrice.getText());
        await TarPage.recrFormRecrTMoreBtn.click();
        await TarPage.recrFormRecrTMoreBtn.click();
        const fiveRecRecT = parseFloat(await TarPage.recruitmentPrice.getText());
        expect(parseFloat(fiveRecRecT) - parseFloat(threeRecRecT)).toBeGreaterThanOrEqual(90);
        expect(parseFloat(fiveRecRecT) - parseFloat(twoRecRecT)).toBeGreaterThanOrEqual(135);
    })

    it('should show how bigger will be price with more recruiters with more employees in All Tariff', async () => {
        const price1 = parseFloat(await TarPage.allInclusivePrice.getText());
        (await TarPage.employees31All).click();
        const price31 = parseFloat(await TarPage.allInclusivePrice.getText());
        (await TarPage.employees51All).click();
        const price51 = parseFloat(await TarPage.allInclusivePrice.getText());
        (await TarPage.employees101All).click();
        const price101 = parseFloat(await TarPage.allInclusivePrice.getText());
        (await TarPage.employees151All).click();
        const price151 = parseFloat(await TarPage.allInclusivePrice.getText());
        (await TarPage.employees201All).click();
        const price201 = parseFloat(await TarPage.allInclusivePrice.getText());
        (await TarPage.employees251All).click();
        const price251 = parseFloat(await TarPage.allInclusivePrice.getText());

        expect(parseFloat(price31) - parseFloat(price1)).toBeGreaterThanOrEqual(60);
        expect(parseFloat(price51) - parseFloat(price31)).toBeGreaterThanOrEqual(70);
        expect(parseFloat(price101) - parseFloat(price51)).toBeGreaterThanOrEqual(70);
        expect(parseFloat(price151) - parseFloat(price101)).toBeGreaterThanOrEqual(30);
        expect(parseFloat(price201) - parseFloat(price151)).toBeGreaterThanOrEqual(75);
        expect(parseFloat(price251) - parseFloat(price201)).toBeGreaterThanOrEqual(75);
    })

    it('should show how bigger will be price with more recruiters with more employees in HR Tariff', async () => {
        const price1 = parseFloat(await TarPage.hrPrice.getText());
        (await TarPage.employees31Hr).click();
        const price31 = parseFloat(await TarPage.hrPrice.getText());
        (await TarPage.employees51Hr).click();
        const price51 = parseFloat(await TarPage.hrPrice.getText());
        (await TarPage.employees101Hr).click();
        const price101 = parseFloat(await TarPage.hrPrice.getText());
        (await TarPage.employees151Hr).click();
        const price151 = parseFloat(await TarPage.hrPrice.getText());
        (await TarPage.employees201Hr).click();
        const price201 = parseFloat(await TarPage.hrPrice.getText());
        (await TarPage.employees251Hr).click();
        const price251 = parseFloat(await TarPage.hrPrice.getText());

        expect(parseFloat(price31) - parseFloat(price1)).toBeGreaterThanOrEqual(60);
        expect(parseFloat(price51) - parseFloat(price31)).toBeGreaterThanOrEqual(70);
        expect(parseFloat(price101) - parseFloat(price51)).toBeGreaterThanOrEqual(70);
        expect(parseFloat(price151) - parseFloat(price101)).toBeGreaterThanOrEqual(30);
        expect(parseFloat(price201) - parseFloat(price151)).toBeGreaterThanOrEqual(75);
        expect(parseFloat(price251) - parseFloat(price201)).toBeGreaterThanOrEqual(75);
    })
})

