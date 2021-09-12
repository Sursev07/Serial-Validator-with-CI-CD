const {
  splitString,
  reverseOddIndex,
  decryptElement,
  groupingSymbol,
  serialValidator,
} = require("../index.js");
const Restriction = require("hacktiv8-restriction");

describe("Serial Validator", () => {
  it("should convert to array (10)", () => {
    const result1 = splitString("79 08 86 79");
    const result2 = splitString("124 765");
    expect(result1).toStrictEqual([ '79', '08', '86', '79']);
    expect(result2).toStrictEqual([ '124', '765' ]);
  });

  it("should reverse the odd index (15)", () => {
    const result1 = reverseOddIndex([ '79', '08', '86', '79']);
    const result2 = reverseOddIndex([ '124', '765' ]);
    expect(result1).toStrictEqual([ '79', '80', '86', '97']);
    expect(result2).toStrictEqual([ '124', '567' ]);
  });

  it("should decrypt all element from array (10)", () => {
    const result1 = decryptElement([ '79', '80', '86', '97']);
    const result2 = decryptElement([ '124', '567' ]);
    expect(result1).toStrictEqual([ '*)', '*)', '(&', '(&' ]);
    expect(result2).toStrictEqual([ '@#%', '%^&' ]);
  });

  it("should modify number based on certain condition (15)", () => {
    const result1 = groupingSymbol([ '*)', '*)', '(&', '(&' ]);
    const result2 = groupingSymbol([ '@#%', '%^&' ]);
    expect(result1).toStrictEqual([
      [ '*)', '*)'],
      ['(&', '(&' ]
    ]);
    expect(result2).toStrictEqual([
      [ '@#%', '%^&' ]
    ]);
  });

  it("should implementing modular function (25)", () => {
    expect(typeof splitString).toBe("function");
    expect(typeof reverseOddIndex).toBe("function");
    expect(typeof decryptElement).toBe("function");
    expect(typeof groupingSymbol).toBe("function");
    expect(typeof serialValidator).toBe("function");
  });

  it("should validate if the string is less than 9 characters (5)", () => {
    const result1 = serialValidator("1234");
    expect(result1).toMatch(/Harus lebih dari 9 karakter/i);
  });

  it("should produce output which match with requirements (5)", () => {
    const result = serialValidator("79 08 86 79");
    const result2 = serialValidator("124 765 876 678");
    const result3 = serialValidator("4947 8505 6843 4597");
    const result4 = serialValidator("3417 1218 1813 1311");
    expect(result).toBe('Serial number is valid');
    expect(result2).toBe('Invalid serial number');
    expect(result3).toBe('Serial number is valid');
    expect(result4).toBe('Invalid serial number');
  });

  test("check restriction (-20)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = [
      "match",
      "split",
      "concat",
      "search",
      "pop",
      "unshift",
      "shift",
    ];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
