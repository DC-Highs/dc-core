const cp = require('child_process');
try {
    cp.execSync('npx jest --json', { encoding: 'utf8', stdio: 'pipe' });
    console.log("ALL PASSED");
} catch(e) {
    const out = JSON.parse(e.stdout);
    out.testResults.forEach(r => r.assertionResults.filter(a => a.status === 'failed').forEach(a => {
        console.log(r.name.split('\\').pop(), '|', a.title, '|', a.failureMessages[0].split('\n').slice(0, 3).join(' '));
    }));
}
