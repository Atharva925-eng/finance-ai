const taxSlabs = {
  IN: [
    { min: 0, max: 300000, rate: 0 },
    { min: 300000, max: 700000, rate: 0.05 },
    { min: 700000, max: 1200000, rate: 0.1 },
    { min: 1200000, max: 1500000, rate: 0.15 },
    { min: 1500000, max: 999999999, rate: 0.2 },
  ],
  US: [
    { min: 0, max: 11000, rate: 0.1 },
    { min: 11000, max: 44725, rate: 0.12 },
    { min: 44725, max: 95375, rate: 0.22 },
    { min: 95375, max: 182100, rate: 0.24 },
    { min: 182100, max: 999999999, rate: 0.32 },
  ],
  UK: [
    { min: 0, max: 12570, rate: 0 },
    { min: 12570, max: 50270, rate: 0.2 },
    { min: 50270, max: 125140, rate: 0.4 },
    { min: 125140, max: 999999999, rate: 0.45 },
  ],
};

export function getTaxSlabs(countryCode) {
  return taxSlabs[countryCode] || taxSlabs.IN;
}

export default taxSlabs;
