const shell = require('../../../node_modules/shelljs');

for(var i = 0 ; i<=992;i++){
    shell.exec('touch file'+i);
    console.log(i);
}