// input tweet data into geostates

import tweets from "./src/data.json" assert { type : "json" };

var st = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
var symptoms = ["rhinitis", "fever", "cough", "weakness", "fainting", "runny nose", "sore throat", "headache"]

//console.log(tweets.in.length);
//console.log(tweets.in[5000].Location.substr(-2,2))

var stateSymptoms = {};
var countSymptoms = {};

for (let i = 0; i < tweets.in.length; i++) {
  if (!(tweets.in[i].Location.substr(-2,2) in stateSymptoms) && st.includes(tweets.in[i].Location.substr(-2,2)) ) {
    stateSymptoms[tweets.in[i].Location.substr(-2,2)] = 1;
  }
  else if ((tweets.in[i].Location.substr(-2,2) in stateSymptoms) && st.includes(tweets.in[i].Location.substr(-2,2))) {
    stateSymptoms[tweets.in[i].Location.substr(-2,2)] += 1;
  }
  for (let i2 = 0; i2 < symptoms.length; i2++) {
    if (tweets.in[i].Tweet.includes(symptoms[i2]) && !(symptoms[i2] in countSymptoms)) {
      countSymptoms[symptoms[i2]] = 1;
    }
    else if (tweets.in[i].Tweet.includes(symptoms[i2]) && (symptoms[i2] in countSymptoms)) {
      countSymptoms[symptoms[i2]] += 1;
    }
  }
}
console.log(stateSymptoms); 
console.log(countSymptoms);

/*
cold symptoms that appear in each tweet, only locations with abbr state names
{
  WA: 1265,
  TX: 5125,
  IA: 269,
  NC: 1188,
  CA: 6638,
  IN: 725,
  FL: 2693,
  NJ: 1137,
  OH: 1499,
  WI: 431,
  MN: 693,
  PA: 1520,
  NY: 3364,
  AL: 461,
  MD: 878,
  RI: 146,
  MS: 196,
  NE: 232,
  GA: 1495,
  MA: 898,
  NV: 744,
  OR: 579,
  MI: 1032,
  DC: 417,
  VA: 1012,
  KY: 399,
  NM: 205,
  IL: 1782,
  LA: 946,
  SC: 425,
  AZ: 936,
  TN: 921,
  WV: 112,
  MO: 652,
  CT: 412,
  CO: 799,
  MT: 64,
  DE: 38,
  ND: 58,
  SD: 46,
  NH: 83,
  AK: 129,
  AR: 189,
  UT: 299,
  OK: 403,
  KS: 236,
  HI: 144,
  ME: 89,
  ID: 123,
  WY: 36,
  VT: 41,
}
*/

/*
key words we looked for
{
  headache: 4734,
  cough: 4241,
  fever: 3655,
  sore throat: 678,
  runny nose: 234,
  fainting: 3,
  weakness: 23,
  rhinitis: 1,
}

*/