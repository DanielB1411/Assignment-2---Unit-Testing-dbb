import {describe,assert,expect,it} from 'vitest';
import { getCurrentYear } from '../dateUtils';


describe("Date Utils", () => {
  // Add your tests here
  it("should run getCurrentYear", () => {

    const currentYear = getCurrentYear()
    const compareCurrentYear:number = 2024
    expect(currentYear).toEqual(compareCurrentYear)
  
  })

});
