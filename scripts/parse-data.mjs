import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const srcDataDir = path.join(process.cwd(), 'src', 'data');
if (!fs.existsSync(srcDataDir)) {
  fs.mkdirSync(srcDataDir, { recursive: true });
}

function parseCsv(filename, outputName) {
  const inputPath = path.join(process.cwd(), filename);
  if (!fs.existsSync(inputPath)) return;
  const fileContent = fs.readFileSync(inputPath, 'utf-8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });
  
  const outputPath = path.join(srcDataDir, outputName);
  fs.writeFileSync(outputPath, JSON.stringify(records, null, 2));
  console.log(`Parsed ${filename} -> ${outputName}`);
}

parseCsv('audience.csv', 'audience.json');
parseCsv('events.csv', 'events.json');
parseCsv('speakers.csv', 'speakers.json');
parseCsv('stats.csv', 'stats.json');
parseCsv('tracks.csv', 'tracks.json');

// Process partners
const partnersDir = path.join(process.cwd(), 'public', 'partners');
const partners = {
  sponsor: [],
  vc: [],
  media: [],
  community: [],
  payment: [],
  ticketing: []
};

if (fs.existsSync(partnersDir)) {
  const files = fs.readdirSync(partnersDir);
  for (const file of files) {
    if (file.startsWith('sponsor-')) partners.sponsor.push(file);
    else if (file.startsWith('vc-')) partners.vc.push(file);
    else if (file.startsWith('media-')) partners.media.push(file);
    else if (file.startsWith('community-')) partners.community.push(file);
    else if (file.startsWith('payment-')) partners.payment.push(file);
    else if (file.startsWith('ticketing-')) partners.ticketing.push(file);
  }
}

fs.writeFileSync(
  path.join(srcDataDir, 'partners.json'),
  JSON.stringify(partners, null, 2)
);
console.log('Parsed partners directory -> partners.json');
