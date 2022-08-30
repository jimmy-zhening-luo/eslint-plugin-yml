import { RuleTester } from "eslint";
import rule from "../../../src/rules/no-empty-key";
import { loadTestCases } from "../../utils/utils";

const tester = new RuleTester({
  parser: require.resolve("yaml-eslint-parser"),
  parserOptions: {
    ecmaVersion: 2020,
  },
});

tester.run("no-empty-key", rule as any, loadTestCases("no-empty-key"));
