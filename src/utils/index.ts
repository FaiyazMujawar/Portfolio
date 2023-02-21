function* numberGenerator() {
  let index = 0;
  while (true) yield index++;
}

export const keyGenerator = () => numberGenerator();
