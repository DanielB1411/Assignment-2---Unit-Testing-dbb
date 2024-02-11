import {describe,assert,expect,it} from 'vitest';
import { add, getCurrentYear, isDateBefore, isSameDay, isWithinRange } from '../dateUtils';


describe("Date Utils", () => {
  // Add your tests here
  it("should test getCurrentYear", () => {
    const currentYear = getCurrentYear()
    const compareCurrentYear:number = 2024
    expect(currentYear).toEqual(compareCurrentYear)
  
  })

  it("should test the add function and should be able to add correctly to a date ", () => {
    const someDate = new Date('2024-02-11');
    const changedDate = add(someDate,7)
    const compareDate = new Date('2024-02-18')
    expect(changedDate).toEqual(compareDate)
  })


  it("should test the isWithinRange function and get true as output ", () => {
    const someDate = new Date('2024-02-11');
    const fromDate = new Date('2024-01-11');
    const toDate = new Date('2024-11-11');
    const result = isWithinRange(someDate,fromDate,toDate)
    expect(result).toEqual(true)
  })

  it("should test the isWithinRange function and get false as output ", () => {
    const someDate = new Date('2024-02-11');
    const fromDate = new Date('2025-01-11');
    const toDate = new Date('2025-11-11');
    const result = isWithinRange(someDate,fromDate,toDate)
    expect(result).toEqual(false)
  })


  it("should test the isDateBefore function and get true as output", () => {
    const someDate = new Date('2024-02-11');
    const otherDate = new Date('2024-03-11');
    const result = isDateBefore(someDate,otherDate)
    expect(result).toEqual(true)
  })

  it("should test the isDateBefore function and get true as output", () => {
    const someDate = new Date('2025-02-11');
    const otherDate = new Date('2024-03-11');
    const result = isDateBefore(someDate,otherDate)
    expect(result).toEqual(false)
  })


  it("should test the isSameDay function and get true as output", () => {
    const someDate = new Date('2024-02-11');
    const otherDate = new Date('2024-02-11');
    const result = isSameDay(someDate,otherDate)
    expect(result).toEqual(true)
  })

  it("should test the isSameDay function and get false as output", () => {
    const someDate = new Date('2024-02-11');
    const otherDate = new Date('2014-02-11');
    const result = isSameDay(someDate,otherDate)
    expect(result).toEqual(false)
  })



});
