export default function* generator() {
  let id =  0;
  while (true) {
    yield id++;
  }
}

let idGen = generator();