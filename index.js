const puppeteer = require('puppeteer');

// Войти
(async () => {
    const browser = await puppeteer.launch({
        // headless: false, slowMo: 100, // Uncomment to visualize test
    });
    const page = await browser.newPage();
    await page.goto('http://94.127.67.209:8080/TestApp/');
    await page.setViewport({ width: 1980, height: 800 });
    await page.waitForSelector('.hide-auth > [href="#"]');
    await page.click('.hide-auth > [href="#"]');

    // Click on <input> #auth_phone
    await page.waitForSelector('#auth_phone');
    await page.click('#auth_phone');

    // Fill "1234567" on <input> #auth_phone
    await page.waitForSelector('#auth_phone:not([disabled])');
    await page.type('#auth_phone', '1234567');

    // Click on <input> #name
    await page.waitForSelector('#name');
    await page.click('#name');

    // Fill "" on <input> #name
    await page.waitForSelector('#name:not([disabled])');
    await page.type('#name', '');

    // Click on <button> "ОТПРАВИТЬ"
    await page.waitForSelector('.btn-default:nth-child(1)');
    await page.click('.btn-default:nth-child(1)');

    await browser.close();
})();


//Владельцем рынков
(async () => {
    const browser = await puppeteer.launch({
        // headless: false, slowMo: 100, // Uncomment to visualize test
    });
    const page = await browser.newPage();

    // Load "http://94.127.67.209:8080/TestApp/#"
    await page.goto('http://94.127.67.209:8080/TestApp/#');

    // Resize window to 1846 x 939
    await page.setViewport({ width: 1846, height: 939 });

    // Click on <a> "Владельцем рынков" and await navigation
    await page.waitForSelector('[href="https://google.com"]');
    await Promise.all([
        page.click('[href="https://google.com"]'),
        page.waitForNavigation()
    ]);
    await page.screenshot({ path: 'market-owners.png' });
    await browser.close();
})();


//О нас
(async () => {
    const browser = await puppeteer.launch({
        // headless: false, slowMo: 100, // Uncomment to visualize test
    });
    const page = await browser.newPage();

    // Load "http://94.127.67.209:8080/TestApp/#hiring"
    await page.goto('http://94.127.67.209:8080/TestApp/#hiring');

    // Resize window to 1846 x 939
    await page.setViewport({ width: 1846, height: 939 });

    // Click on <a> "О нас"
    await page.waitForSelector('[href="#hiring"]');
    await page.click('[href="#hiring"]');
    await page.screenshot({ path: 'about.png' });
    await browser.close();
})();


// Контакты
(async () => {
    const browser = await puppeteer.launch({
        // headless: false, slowMo: 100, // Uncomment to visualize test
    });
    const page = await browser.newPage();

    // Load "http://94.127.67.209:8080/TestApp/#contacts"
    await page.goto('http://94.127.67.209:8080/TestApp/#contacts');

    // Resize window to 1846 x 939
    await page.setViewport({ width: 1846, height: 939 });

    // Click on <a> "Контакты"
    await page.waitForSelector('[href="#contacts"]');
    await page.click('[href="#contacts"]');
    await page.screenshot({ path: 'contacts.png' });
    await browser.close();
})();

//Slider
(async () => {
    const browser = await puppeteer.launch({
    });
    const page = await browser.newPage();
    await page.goto('http://94.127.67.209:8080/TestApp/#contacts');
    await page.waitForSelector('[href="#carouselExampleIndicators"]:nth-child(4)');
    await page.click('[href="#carouselExampleIndicators"]:nth-child(4)');
    await page.screenshot({ path: 'slider.png' });
    await browser.close();
})();

// "Подробнее" платформа для общения
(async () => {
    const browser = await puppeteer.launch({
    });
    const page = await browser.newPage();
    await page.goto('http://94.127.67.209:8080/TestApp/#contacts');

    await page.waitForSelector('.col-lg-3:nth-child(1) [href="#"]');
    await page.click('.col-lg-3:nth-child(1) [href="#"]');
    await page.screenshot({ path: 'client-forum.png' });
    await browser.close();
})();


//Подробнее платформа для опросов
(async () => {
    const browser = await puppeteer.launch({
    });
    const page = await browser.newPage();
    // Load "http://94.127.67.209:8080/TestApp/#contacts"
    await page.goto('http://94.127.67.209:8080/TestApp/#contacts');
    await page.waitForSelector('.col-lg-3:nth-child(2) [href="#"]');
    await page.click('.col-lg-3:nth-child(2) [href="#"]');
    await page.screenshot({ path: 'client-forum.png' });
    await browser.close();
})();

// Доска объявлений
(async () => {
    const browser = await puppeteer.launch({
    });
    const page = await browser.newPage();
    await page.goto('http://94.127.67.209:8080/TestApp/#contacts');
    await page.setViewport({ width: 1846, height: 939 });
    await page.waitForSelector('.col-lg-3:nth-child(3) [href="#"]');
    await page.click('.col-lg-3:nth-child(3) [href="#"]');
    await page.screenshot({ path: 'ad-board.png' });
    await browser.close();
})();

//Подробнее торговая площадка
(async () => {
    const browser = await puppeteer.launch({
    });
    const page = await browser.newPage();
    await page.goto('http://94.127.67.209:8080/TestApp/#contacts');
    await page.waitForSelector('.col-lg-5 [href="#"]');
    await page.click('.col-lg-5 [href="#"]');
    await page.screenshot({ path: 'market-stock.png' });
    await browser.close();
})();

