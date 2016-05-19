var fs = require('fs');

if (fs.existsSync('testDir')) {
    
    process.chdir('testDir');
    console.log('Current working directory: ' + process.cwd());
    if (fs.existsSync('testFile.txt')) {
        fs.unlinkSync('testFile.txt');
        console.log('testFile.txt removed.');
    }
    
    process.chdir('../');
    fs.rmdirSync('testDir');
    console.log('testDir removed.');

}

fs.mkdirSync('testDir');
if (fs.existsSync('testDir')) {
    
    process.chdir('testDir');
    fs.writeFileSync('oldFile.txt', 'This is the contents of the file');
    fs.renameSync('oldFile.txt', 'testFile.txt');
    
    console.log('File and directory created.');
    console.log('Size of the file: ' + fs.statSync('testFile.txt').size + ' bytes');
    console.log('Contents of the file: ' + fs.readFileSync('testFile.txt'));

}