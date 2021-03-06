import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Wolves');

// we can reference matchReader.matches after we invoke .load()
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
