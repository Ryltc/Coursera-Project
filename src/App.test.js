import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ReservationComp from './components/ReservationComp';

//test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});

test("Renders the ReservationComp", () => {
  render(<ReservationComp />);
  const submitBtn = screen.getByText("Make Reservation");
  expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
  render(<ReservationComp />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
  const timeDropDown = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  expect(timeDropDown.value).toEqual("17:00");
});