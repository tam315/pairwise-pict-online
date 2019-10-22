const { exec } = require('child_process');
const fs = require('fs');
const tmp = require('tmp');

module.exports = (req, res) => {
  // generate temporary file
  tmp.file(function(err, path) {
    if (err) {
      return res.status(500).json({ message: err });
    }

    // write received data to a file
    fs.writeFileSync(path, req.body.factors);

    // exec pict
    exec(`pict ${path}`, (err, stdout, stderr) => {
      if (err) {
        return res.status(500).json({ message: stderr });
      }
      res.json(stdout);
    });
  });
};
