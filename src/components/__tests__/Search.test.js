import { render } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mockData/mockResListData.json";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should Render Body component", async () => {
  await act(() => render(<BrowserRouter><Body /></BrowserRouter>));
});

