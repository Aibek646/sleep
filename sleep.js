async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, millis);
  });
}

let t = Date.now();

sleep(100).then(() => {
  console.log(Date.now() - t);
});
