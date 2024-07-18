const puppeteer = require('puppeteer');

(async() => {
    try {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        await page.goto('https://pptr.dev');

        const title = await page.title();
        console.log(`Title: ${title}`);

        const textContent = await page.evaluate(() => {
            return document.querySelector('h1').innerText;
        });

        console.log(`Text content: ${textContent}`);

        await page.screenshot({path: 'example.png'});

        await browser.close();
    } catch (error) {
        console.error(`Error: `, error);
    }
})();