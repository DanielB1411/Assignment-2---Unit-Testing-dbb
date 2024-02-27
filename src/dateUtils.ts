import { getYear, addDays, isWithinInterval, isBefore, isEqual } from "date-fns";

export function getCurrentYear():number {
  return getYear(new Date());
}

export function add(date: Date, number:number):Date {
  return addDays(date,number)
}

export function isWithinRange(date:Date, from:Date, to:Date):boolean {
  return isWithinInterval(date,{ start: from, end: to })
}

export function isDateBefore(date:Date, compareDate:Date):boolean {
  return isBefore(date,compareDate)
}

export function isSameDay(date:Date, compareDate:Date):boolean {
  return isEqual(date,compareDate)
}

