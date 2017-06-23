/**
 * This is the entry point for help-stackoverflow NPM package.
 *
 * @author Seung Jae (Ryan) Lee <seungjaeryanlee@gmail.com>
 */
process.on('uncaughtException', function(errorMessage) {
  require('opn')('https://stackoverflow.com/search?q=' + errorMessage);
});