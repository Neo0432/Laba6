describe("sortTable", function () {
  let array = [
    { avr: "4" },
    { avr: "5" },
    { avr: "2" },
    { avr: "1" },
    { avr: "3" },
  ];
  let sortedArray = [
    { avr: "5" },
    { avr: "4" },
    { avr: "3" },
    { avr: "2" },
    { avr: "1" },
  ];
  it("sorting array by avr", function () {
    assert.deepEqual(sortTable(array), sortedArray);
  });
});
