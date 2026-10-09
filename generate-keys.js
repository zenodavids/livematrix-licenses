// generate-keys.js
// use cmd where the file path is to Run with: node generate-keys.js

// free keys:
// 1. LM-52U3-LC5Q-ANWU-BVVR
// 2. LM-ZE9W-BVRE-4TCZ-T5BK
// 3. LM-C3LA-QLZZ-FQKT-MYJZ
// 4. LM-B44L-HXVZ-HG4P-FK7C
// 5. LM-DKZW-FX8N-UBFZ-QPFY
// 6. LM-96Q3-FJXA-NNWK-MZ8U
// 7. LM-RH38-V5UM-RE7X-MPH9
// 8. LM-VJV4-WBFR-HFJ9-TWH7
// 9. LM-LWQW-YCKD-PAKL-6YUV
// 10. LM-EELL-NNP5-7D4U-4Y4W
// 11. LM-B93E-85FS-C5DU-YMEK
// 12. LM-8QTH-VN3A-X3TW-RCQT
// 13. LM-WFZZ-7TET-P43R-282S
// 14. LM-L5U3-8LXU-28PP-XRTN
// 15. LM-G9AH-PNKN-2LRZ-75UN
// 16. LM-H93K-6TNE-UZL9-P63L
// 17. LM-ERJK-TKUL-5F88-6XYM
// 18. LM-GQJM-934X-CEMS-EWAB
// 19. LM-6BJF-FEBW-Y8M3-TKSC
// 20. LM-47FB-SH7S-UT5Y-ULU3

function generateKey() {
  const segments = [];
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no I, O, 0, 1 to avoid confusion

  for (let i = 0; i < 4; i++) {
    let segment = "";
    for (let j = 0; j < 4; j++) {
      segment += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    segments.push(segment);
  }

  return `LM-${segments.join("-")}`;
}

// Generate 20 keys
console.log("=== LiveMatrix License Keys ===\n");

for (let i = 1; i <= 20; i++) {
  const key = generateKey();
  console.log(`${i}. ${key}`);
}

console.log("\n=== Copy these keys and save them ===");
