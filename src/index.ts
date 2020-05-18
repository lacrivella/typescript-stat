import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader &
// pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// we can reference matchReader.matches after we invoke .load()

console.log(`Manchest United won ${manUnitedWins} games this season!`);
