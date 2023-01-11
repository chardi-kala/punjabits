import scrapeVideos from './scraper';

let url = "https://www.youtube.com/channel/UCXD5D7d6h4TsxXGAE9gRxbg/videos";

async function getVids() {
    const data = await scrapeVideos(url);
    return data;
}

const getVidsIFrames = async() => {
    let data = getVids();
    console.log(data);
    const vids = data;

    // store data from foreach into an array
    let IFrameList = [];
    vids.forEach(vid => {
        let rawIframe = `<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/${vid.vidID}?autoplay=1&" placeholder="${vid.title}" frameborder="0"></iframe>`;
        IFrameList.push(rawIframe);
    });
    return IFrameList;
}

export default getVidsIFrames;