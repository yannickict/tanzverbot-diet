import { calcDateOnDiet, Sex } from "./tanzverbot-diet";

test("Tanzverbot Diet (Male)", () => {
  expect(calcDateOnDiet(74, 100, 1.86, 38, Sex.Male)).toBe(36);
});

test("Tanzverbot Diet (Female)", () => {
  expect(calcDateOnDiet(74, 100, 1.86, 38, Sex.Female)).toBe(35);
});

test("Very young age (edge)", () => {
  expect(() => calcDateOnDiet(50, 55, 1.55, 15, Sex.Female)).toThrow(
    "You do not qualify for this kind of diet."
  );
});

test("Very short height (edge)", () => {
  expect(() => calcDateOnDiet(50, 55, 1.49, 25, Sex.Female)).toThrow(
    "You do not qualify for this kind of diet."
  );
});

test("Tanzverbot Diet - Valid Weight", () => {
  expect(calcDateOnDiet(80, 130, 1.8, 18, Sex.Male)).toBe(70);
});

test("Diet for a tall, heavy male", () => {
  expect(calcDateOnDiet(90, 100, 2.0, 30, Sex.Male)).toBe(15);
});

test("Small weight gain", () => {
  expect(calcDateOnDiet(70, 71, 1.75, 25, Sex.Male)).toBe(2);
});

test("Female with medium stats", () => {
  expect(calcDateOnDiet(55, 60, 1.68, 22, Sex.Female)).toBe(7);
});

test("No weight gain", () => {
  expect(calcDateOnDiet(60, 60, 1.7, 25, Sex.Female)).toBe(0);
});

test("Negative weight gain (weight loss)", () => {
  expect(() => calcDateOnDiet(75, 70, 1.7, 25, Sex.Male)).toThrow(
    "This diet is for gaining weight, not loosing it!"
  );
});
