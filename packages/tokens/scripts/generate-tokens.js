const StyleDictionary = require('style-dictionary');

const config = require('./config.json');

const styleDictionary = StyleDictionary.extend(config);

styleDictionary.registerFileHeader({
  name: 'mysticjsTokensHeader',
  fileHeader() {
    return [
      `! DO NOT EDIT THIS TOKENS FILE DIRECTLY!
 * ! THIS FILE WAS GENERATED BY A TOKEN GENERATION SCRIPT.
 * ***************************************************************************************
 * * MysticJS Design Tokens for consumption by MysticJS libraries or applications.
 *
 * * If you need to update this file, update the tokens in the 'definitions' folder and
 * * re-run the build-tokens script from 'package.json'.
 * ***************************************************************************************`,
    ];
  },
});

styleDictionary.buildAllPlatforms();