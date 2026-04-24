// src/utils/parseSRT.js
// Parses an SRT subtitle string into an array of cue objects
export function parseSRT(srtString) {
  if (!srtString) return [];
  
  return srtString
    .replace(/\r/g, '') // Normalize line endings
    .trim()
    .split(/\n\n+/)
    .map((block) => {
      const lines = block.trim().split('\n');
      if (lines.length < 3) return null;
      
      // Support both comma and dot for milliseconds
      const timeMatch = lines[1].match(
        /(\d{2}):(\d{2}):(\d{2})[.,](\d{3}) --> (\d{2}):(\d{2}):(\d{2})[.,](\d{3})/
      );
      
      if (!timeMatch) return null;
      
      const toSec = (h, m, s, ms) =>
        +h * 3600 + +m * 60 + +s + +ms / 1000;
        
      return {
        index: parseInt(lines[0]),
        start: toSec(...timeMatch.slice(1, 5)),
        end:   toSec(...timeMatch.slice(5, 9)),
        text:  lines.slice(2).join(' ')
      };
    })
    .filter(Boolean);
}
