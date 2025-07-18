function isValidDate(date) {
  const parts = date.split("/");
  if (parts.length !== 3) 
    return false;

  const day = parts[0];
  const month = parts[1];
  const year = parts[2];


  if (day.length !== 2 || month.length !== 2 || year.length !== 4) 
    return false;

  const day2 = parseInt(day, 10);
  const month2 = parseInt(month, 10);
  const year2 = parseInt(year, 10);


  if (isNaN(day2) || isNaN(month2) || isNaN(year2)) 
    return false;


  if (month2< 1 || month2> 12) {
    return false;
  }
  
  if (day2 < 1 || day2 > 31) {
    return false;
  }
  return true;
}
  
//  function maxDaysInMonth(months3){


//  }
console.log(isValidDate("03/04/2001"))
console.log(isValidDate("03/14/2001"))



