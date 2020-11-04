for (let i = 0; i < someNumber; i += 1) {
  if (someCondition) {
    // some code here
    if (anotherCondition) {
      // some code here
    }
  }
}

for (let i = 0; i < someNumber; i += 1) {
  if (!someCondition) {
    continue;
  }
  // some code here

  if (!anotherCondition) {
    continue;
  }
  // some code here
}
