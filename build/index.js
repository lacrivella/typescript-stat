"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// create an object that satisfies the DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of MatchReader &
// pass in something satisfying the DataReader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// we can reference matchReader.matches after we invoke .load()
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchest United won " + manUnitedWins + " games this season!");
