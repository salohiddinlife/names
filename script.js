const massive = [];

while (true) {
  const input = prompt('Введите команду:');

  if (input === 'stop') break;

  const [cmd, name] = input.split('.');

  if (cmd === 'add' && name) {
    massive.push(name);
    console.log(massive);
  } else if (cmd === 'del' && name) {
    const index = massive.indexOf(name);
    if (index !== -1) {
      massive.splice(index, 1);
      console.log(massive);
    } else {
      console.log(massive);
    }
  } else {
    alert('Недопустимая команда.');
  }
}

console.log(massive);
