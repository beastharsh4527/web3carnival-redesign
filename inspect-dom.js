const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

    const info = await page.evaluate(() => {
      const posters = document.querySelectorAll('.group.pointer-events-auto.cursor-pointer');
      if (posters.length === 0) return { error: 'No posters found in the DOM' };

      const data = [];
      posters.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const compStyle = window.getComputedStyle(el);
        const parentStyle = window.getComputedStyle(el.parentElement);
        
        data.push({
          index: i,
          rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
          transform: compStyle.transform,
          opacity: compStyle.opacity,
          zIndex: compStyle.zIndex,
          parentTransform: parentStyle.transform,
          parentOpacity: parentStyle.opacity,
          parentRect: el.parentElement.getBoundingClientRect(),
          imgSrc: el.querySelector('img') ? el.querySelector('img').src : 'No image'
        });
      });
      
      const spatialWrapper = document.querySelector('.pointer-events-none');
      let wrapperData = {};
      if (spatialWrapper) {
        const wRect = spatialWrapper.getBoundingClientRect();
        const wStyle = window.getComputedStyle(spatialWrapper);
        wrapperData = {
          rect: { x: wRect.x, y: wRect.y, width: wRect.width, height: wRect.height },
          opacity: wStyle.opacity,
          perspective: wStyle.perspective,
          zIndex: wStyle.zIndex
        };
      }

      return { posters: data, wrapperData };
    });

    console.log(JSON.stringify(info, null, 2));
    await browser.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
