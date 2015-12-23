const settings = __DEVELOPMENT__ ? '' : 'scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no';

const sizes = {
  vkontakte: [580, 550],
  soundcloud: [580, 550],
  facebook: [580, 550],
  twitter: [495, 645],
  google: [452, 633],
  github: [1020, 618],
  linkedin: [527, 582],
  live: [500, 560],
  yahoo: [559, 519]
};

function getOffset([windowWidth, windowHeight]) {
  const documentElement = document.documentElement;

  // Multi Screen Popup Positioning (http://stackoverflow.com/a/16861050)
  // Credit: http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html
  // Fixes dual-screen position

  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  const width = window.innerWidth || documentElement.clientWidth || screen.width;
  const height = window.innerHeight || documentElement.clientHeight || screen.height;

  const left = ((width - windowWidth) / 2) + dualScreenLeft;
  const top = ((height - windowHeight) / 2) + dualScreenTop;

  return [top, left];
}

function getDimensions(provider) {
  const [width, height] = sizes[provider] || [500, 550];
  const [top, left] = getOffset([width, height]);

  return `width=${width},height=${height},top=${top},left=${left}`;
}

export default function openPopup(provider, url, name) {
  const dimensions = getDimensions(provider);
  const popup = window.open(url, name, `${settings},${dimensions}`);
  if (popup && popup.focus) popup.focus();

  return popup;
}
