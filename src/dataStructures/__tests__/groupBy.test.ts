import { describe, it, expect } from "vitest";
import { groupBy } from "../groupBy";

describe("groupBy", () => {
  it("groups by string property", () => {
    const data = [
      { category: "fruta", name: "manzana" },
      { category: "fruta", name: "banana" },
      { category: "verdura", name: "zanahoria" },
    ];

    const result = groupBy(data, "category");

    expect(result).toEqual({
      fruta: [
        { category: "fruta", name: "manzana" },
        { category: "fruta", name: "banana" },
      ],
      verdura: [{ category: "verdura", name: "zanahoria" }],
    });
  });

  it("groups by numeric property", () => {
    const data = [
      { id: 1, name: "Ana" },
      { id: 2, name: "Juan" },
      { id: 1, name: "Luis" },
    ];

    const result = groupBy(data, "id");

    expect(result).toEqual({
      "1": [
        { id: 1, name: "Ana" },
        { id: 1, name: "Luis" },
      ],
      "2": [{ id: 2, name: "Juan" }],
    });
  });

  it("returns an empty object for an empty array", () => {
    const result = groupBy([], "id");

    expect(result).toEqual({});
  });

  it("groups correctly by boolean property", () => {
    const data = [
      { active: true, name: "Pedro" },
      { active: false, name: "Laura" },
      { active: true, name: "Sofía" },
    ];

    const result = groupBy(data, "active");

    expect(result).toEqual({
      true: [
        { active: true, name: "Pedro" },
        { active: true, name: "Sofía" },
      ],
      false: [{ active: false, name: "Laura" }],
    });
  });
});
