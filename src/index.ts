import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader &
// pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// we can reference matchReader.matches after we invoke .load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
