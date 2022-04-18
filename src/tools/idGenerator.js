function* idGenerator() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

export default idGenerator;