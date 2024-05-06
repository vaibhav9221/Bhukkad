import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mockData/resCardData.json";
import "@testing-library/jest-dom";
import { ResturantCardLessRating } from '../ResturantCard'; // Import the higher-order component

test("Should Load Resturant Card Component", () => {
  render(<ResturantCard resobj={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});


// test('ResturantCardLessRating renders provided ResturantCard with "Less Rating" label', () => {
//     // Render ResturantCardLessRating with ResturantCard as the provided component and MOCK_DATA as props
//     render(
//       <ResturantCardLessRating ResturantCard={ResturantCard} resobj={MOCK_DATA} />
//     );
  
//     // Assert that the button is hidden
//     expect(screen.getByRole("button", { hidden: true })).toBeInTheDocument();
//   });
