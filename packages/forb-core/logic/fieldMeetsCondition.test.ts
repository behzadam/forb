import { ConditionsType } from "../../../src/types";
import { fieldValueMeetsTarget } from "./fieldValueMeetsTarget";

describe(`${ConditionsType.LessThanOrEquals}`, () => {
  test(`should check if target is less than the number`, () => {
    expect(fieldValueMeetsTarget(ConditionsType.LessThanOrEquals, 4, 4)).toBe(
      true
    );
    expect(fieldValueMeetsTarget(ConditionsType.LessThanOrEquals, 2, 3)).toBe(
      true
    );
    expect(fieldValueMeetsTarget(ConditionsType.LessThanOrEquals, 3, 2)).toBe(
      false
    );
  });
});

describe(`${ConditionsType.LessThan}`, () => {
  test(`should check if target is less than the number`, () => {
    expect(fieldValueMeetsTarget(ConditionsType.LessThan, 2, 4)).toBe(true);
    expect(fieldValueMeetsTarget(ConditionsType.LessThan, 4, 2)).toBe(false);
  });
});

describe(`${ConditionsType.GreaterThanOrEquals}`, () => {
  test(`should check if target is greater than or equal the number`, () => {
    expect(
      fieldValueMeetsTarget(ConditionsType.GreaterThanOrEquals, 4, 2)
    ).toBe(true);
    expect(
      fieldValueMeetsTarget(ConditionsType.GreaterThanOrEquals, 4, 4)
    ).toBe(true);
    expect(
      fieldValueMeetsTarget(ConditionsType.GreaterThanOrEquals, 2, 4)
    ).toBe(false);
  });
});

describe(`${ConditionsType.GreaterThan}`, () => {
  test(`should check if target is greater than the number`, () => {
    expect(fieldValueMeetsTarget(ConditionsType.GreaterThan, 4, 2)).toBe(true);
    expect(fieldValueMeetsTarget(ConditionsType.GreaterThan, 2, 4)).toBe(false);
  });
});

describe(`${ConditionsType.IsEmpty}`, () => {
  test("should return true on empty values", () => {
    expect(fieldValueMeetsTarget(ConditionsType.EqualTo, []));
    expect(fieldValueMeetsTarget(ConditionsType.EqualTo, null));
    expect(fieldValueMeetsTarget(ConditionsType.EqualTo, ""));
  });
});

describe(`${ConditionsType.Contains}`, () => {
  test(`should return true array contains some of another array`, () => {
    const target = ["ch1", "ch2", "ch3", "ch4"];
    const picked = ["ch1", "ch2"];

    const result = fieldValueMeetsTarget(
      ConditionsType.Contains,
      target,
      picked
    );
    expect(result).toBe(true);
  });

  test(`should return false if picked array is empty`, () => {
    const target = ["ch1", "ch2", "ch3", "ch4"];
    const picked = [] as string[];

    const result = fieldValueMeetsTarget(
      ConditionsType.Contains,
      target,
      picked
    );
    expect(result).toBe(false);
  });

  test(`should return false if traget array is empty`, () => {
    const target = [] as string[];
    const picked = ["ch1", "ch2"];

    const result = fieldValueMeetsTarget(
      ConditionsType.Contains,
      target,
      picked
    );
    expect(result).toBe(false);
  });

  test(`should return true if target string contains picked string`, () => {
    const target = "hello world";
    const picked = "hello";

    const result = fieldValueMeetsTarget(
      ConditionsType.Contains,
      target,
      picked
    );
    expect(result).toBe(true);
  });

  test(`should return false if picked is empty`, () => {
    const target = "hello world";
    const picked = null;

    const result = fieldValueMeetsTarget(
      ConditionsType.Contains,
      target,
      picked
    );
    expect(result).toBe(false);
  });
});

describe(`${ConditionsType.IsNotContaining}`, () => {
  test(`should check if target does not contain value ( array )`, () => {
    const target = ["ch1", "ch2", "ch3", "ch4"];
    const picked = ["1", "2"];

    expect(
      fieldValueMeetsTarget(ConditionsType.IsNotContaining, target, picked)
    ).toBe(true);
  });

  test(`should check if target does not contain value ( string )`, () => {
    const target = "hello";
    const picked = "world";

    expect(
      fieldValueMeetsTarget(ConditionsType.IsNotContaining, target, picked)
    ).toBe(true);
  });
});

describe(`${ConditionsType.EqualTo}`, () => {
  test(`should return true if strings are eual`, () => {
    const target = "hello";
    const picked = "hello";
    const result = fieldValueMeetsTarget(
      ConditionsType.EqualTo,
      target,
      picked
    );
    expect(result).toBe(true);
  });

  test(`should return false if picked is an empty string`, () => {
    const target = "hello";
    const picked = "";
    const result = fieldValueMeetsTarget(
      ConditionsType.EqualTo,
      target,
      picked
    );
    expect(result).toBe(false);
  });

  test(`should return false if picked is null`, () => {
    const target = "hello";
    const picked = null;
    const result = fieldValueMeetsTarget(
      ConditionsType.EqualTo,
      target,
      picked
    );
    expect(result).toBe(false);
  });

  test(`should return false if strings are not equal`, () => {
    const target = "a";
    const picked = "b";
    const result = fieldValueMeetsTarget(
      ConditionsType.EqualTo,
      target,
      picked
    );
    expect(result).toBe(false);
  });

  test(`should return true if non English strings are equal`, () => {
    const target = "سلام";
    const picked = "سلام";
    const result = fieldValueMeetsTarget(
      ConditionsType.EqualTo,
      target,
      picked
    );
    expect(result).toBe(true);
  });

  test(`should return true if non English strings are not equal`, () => {
    const target = "سلام دنیا";
    const picked = "سلام";
    const result = fieldValueMeetsTarget(
      ConditionsType.EqualTo,
      target,
      picked
    );
    expect(result).toBe(false);
  });
});
