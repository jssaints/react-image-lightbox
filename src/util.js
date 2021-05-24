/**
 * Placeholder for future translate functionality
 */
export function translate(str, replaceStrings = null) {
  if (!str) {
    return '';
  }

  let translated = str;
  if (replaceStrings) {
    Object.keys(replaceStrings).forEach(placeholder => {
      translated = translated.replace(placeholder, replaceStrings[placeholder]);
    });
  }

  return translated;
}

export function isVideo(fileSrc) {
  // video extensions, cre: https://en.wikipedia.org/wiki/Video_file_format
  const videoExts = [
    'webm',
    'mkv',
    'flv',
    'f4v',
    'f4p',
    'f4a',
    'f4b',
    'vob',
    'ogv',
    'ogg',
    'drc',
    /*   'gif',
      'gifv', */
    'mng',
    'avi',
    'mov',
    'qt',
    'wmv',
    'yuv',
    'rm',
    'rmvb',
    'asf',
    'amv',
    'mp4',
    'm4p',
    'm4v',
    'mpg',
    'mp2',
    'mpeg',
    'mpe',
    'mpv',
    'svi',
    '3gp',
    '3g2',
  ];

  return new RegExp(`(${videoExts.join('|').replace(/\./g, '\\.')})$`).test(
    fileSrc
  );
}
export const isAudio = (fileSrc) =>
  fileSrc && fileSrc.toLowerCase().endsWith('.mp3') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.ogg') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.wav')

export const isPDF = (fileSrc) =>
  fileSrc && fileSrc.toLowerCase().endsWith('.pdf')

export const isImage = (fileSrc) =>
  fileSrc && fileSrc.toLowerCase().endsWith('.jpg') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.jpeg') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.gif') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.bmp') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.apng') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.ico') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.cur') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.jfif') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.pjpeg') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.pjp') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.webp') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.svg') ||
  fileSrc && fileSrc.toLowerCase().endsWith('.png')

export function isText(mimetype) {
  if (!mimetype) {
    return false;
  }
  let result = mimetype.match(/text/g) || [];
  return result.length ? true : false;

}

export function getExtension(fileSrc) {
  return fileSrc.split('.').pop().toLowerCase();
}
export function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0;
}

export function getWindowHeight() {
  return typeof global.window !== 'undefined' ? global.window.innerHeight : 0;
}

// Get the highest window context that isn't cross-origin
// (When in an iframe)
export function getHighestSafeWindowContext(self = global.window.self) {
  const { referrer } = self.document;
  // If we reached the top level, return self
  if (self === global.window.top || !referrer) {
    return self;
  }

  const getOrigin = href => href.match(/(.*\/\/.*?)(\/|$)/)[1];

  // If parent is the same origin, we can move up one context
  // Reference: https://stackoverflow.com/a/21965342/1601953
  if (getOrigin(self.location.href) === getOrigin(referrer)) {
    return getHighestSafeWindowContext(self.parent);
  }

  // If a different origin, we consider the current level
  // as the top reachable one
  return self;
}
