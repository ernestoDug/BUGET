import Transaction from "./Transaction";
import React from "react";
import { shallow } from "enzyme";

describe("Transaction component", () => {
  let sut;
  let props;

  beforeEach(() => {
    props = {
      transaction: {
        value: 23,
        comment: "test",
        date: "30.04.2024",
      },
    };

    sut = shallow(<Transaction {...props} />);
  });

  it("should show transaction", () => {
    expect(sut).toMatchSnapshot();
  });

  it("should show 2 zeros after amount", () => {
    expect(sut.find("Value").text()).toBe("23.00");
  });
});
