export default async function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.readAsText(file);
    fr.onloadend = e => {
      resolve(fr.result);
    }
  });
}
