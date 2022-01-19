/* global describe it */
import chai from 'chai'
import { theAnswer } from "../src"

chai.should()

describe("namespace/class/object", () => {
  describe("method", () => {
    it("#testcase", async () => {
      theAnswer.should.be.eq(42);
    });
  });
});
