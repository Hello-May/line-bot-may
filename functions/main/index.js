const test = (event) => {
    event.source.profile().then(function (profile) {
        return 'Hello ' + profile.displayName;
      });
    // return "TEST"
}

module.exports = {
    test
}