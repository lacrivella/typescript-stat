"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
// import { ConsoleReport } from './reportTargets/ConsoleReport';
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// create an object that satisfies the DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of MatchReader &
// pass in something satisfying the DataReader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// we can reference matchReader.matches after we invoke .load()
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
