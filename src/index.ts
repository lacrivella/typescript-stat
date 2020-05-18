import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('fooball.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

// we can reference matchReader.matches after we invoke .load()
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
