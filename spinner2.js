let spins = "|/-\\|/-\\|";
let i = 0;


const spinner = () => setTimeout(() => {
  process.stdout.write(`\r${spins[i]}    `);
  i++;
  if (i < spins.length) {
    spinner();
  }
  if (i === spins.length) {
    process.stdout.write('\n');
  }
}, 200);


spinner();
