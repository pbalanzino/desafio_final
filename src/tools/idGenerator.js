function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

export default idGenerator;