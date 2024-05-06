import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Checking Contact Page",()=>{
    test("Should Load contact us Component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
      
        expect(heading).toBeInTheDocument();
      });
      
      it("should load button inside contact page",()=>{
          render(<Contact/>);
          const button=screen.getByRole("button");
      
          expect(button).toBeInTheDocument();
      })
})


