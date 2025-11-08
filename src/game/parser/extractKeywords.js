const englishWordRegexp = /^[a-zA-Z\-+]+$/;

export function extractKeywords(text) {
  return text
    .toLowerCase()
    .replace(/[?+.,:;]/g, '')
    .split(/[\s/]+/)
    .filter(word => englishWordRegexp.test(word))
    .filter((word, idx, arr) => arr.indexOf(word) === idx); 
}