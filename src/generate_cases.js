const { exec } = require('child_process');
const fs = require('fs');
const tmp = require('tmp');

module.exports = (req, res) => {
  // generate temporary file
  tmp.file(function(err, path, _, cleanupCallback) {
    if (err) {
      console.log('Creating temp file failed:', err);
      return res.status(500).json(JSON.stringify(err));
    }

    // write received data to a file
    fs.writeFileSync(path, req.body.factors);

    // exec pict
    const option = {
      timeout: 3000,
    };
    exec(`pict ${path}`, option, (err, stdout, stderr) => {
      cleanupCallback();
      if (err) {
        console.log('Generating testcases failed:', err);
        return res.status(500).json(JSON.stringify(stderr));
      }
      res.json(stdout);
    });
  });
};
