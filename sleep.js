function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Sleep in loop
for (let i = 0; i < 3; i++) {
  await sleep(1500);
}
