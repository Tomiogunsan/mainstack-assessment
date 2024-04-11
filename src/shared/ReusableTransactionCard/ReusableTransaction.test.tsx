import { render, screen } from "@testing-library/react";
import ReusableTransactionCard from "./index";

describe("ReusableTransaction", () => {
  it("should render", () => {
    render(
      <ReusableTransactionCard
        date="title"
        productName="title"
        depositorName="title"
        withdrawalStatus="title"
        isLoading={false}
        amount={100}
        isMetaData={false}
      />
    );
    expect(screen.getByText("title")).toBeDefined();
    expect(screen.getByText("100")).toBeDefined();
  });
});
