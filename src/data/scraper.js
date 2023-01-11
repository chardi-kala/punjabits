const puppeteer = require("puppeteer");

async function scrapeVideos(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.screenshot({path: 'example.png'})

    const html = await page.evaluate(() =>
        Array.from(document.querySelectorAll('#dismissible #details #meta #video-title-link'), (e) => ({
            title: e.innerText,
            //remove https://www.youtube.com/watch?v= from href
            vidID: e.href.substring(32)
        }))
    );
    browser.close();
    const dataInOrder = html.reverse();
    return dataInOrder;
}

// (async function() {
//     const d1 = await scrapeVideos("https://www.youtube.com/channel/UCXD5D7d6h4TsxXGAE9gRxbg/videos");
//     console.log(d1);
// })()
//scrapeVideos("https://www.youtube.com/@Punjabits/videos")

export default scrapeVideos;