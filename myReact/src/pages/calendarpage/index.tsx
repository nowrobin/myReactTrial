import { useState } from "react";

export default function CalendarPage() {
  const date = new Date();
  interface props {
    ddays: number;
  }
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const days = getDaysInMonth(year, month) + 1;
  let dates: number[] = [];

  //get the day in first of the month
  // sun ~ sat  = 0 ~ 6
  //the number  pus
  //getDaysInmonth(year , month-1)+1
  // --
  const months: string[] = [];
  months[0] = "Null";
  months[1] = "January";
  months[2] = "Feburary";
  months[3] = "March";
  months[4] = "April";
  months[5] = "May";
  months[6] = "June";
  months[7] = "July";
  months[8] = "August";
  months[9] = "September";
  months[10] = "October";
  months[11] = "November";
  months[12] = "December";

  const leftDays = new Date(months[month - 1] + " 1," + year.toString());

  const preDays = leftDays.getDay();
  for (let i = 0; i < days; i++) {
    //년도 넘어갈때 ,, 생각해야됨.
    let previous = getDaysInMonth(year, month - 1) + 1;
    for (let j = 0; j < preDays; j++) {
      dates.push(previous);
      previous--;
    }
    dates.push(i);
  }
  console.log(dates);
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }
  function preMonth() {
    if (month == 1) {
      setYear(year - 1);
      setMonth(12);
    } else setMonth(month - 1);
  }
  function nextMonth() {
    if (month == 12) {
      setYear(year + 1);
      setMonth(1);
    } else setMonth(month + 1);
  }
  function CreateDates(x: any) {
    //console.log(x);
    // return <h1 key={index}>{x}</h1>;
    return <div>1</div>;
  }
  return (
    <div>
      <div className="w-24 flex flex-row gap-5">
        <button onClick={preMonth}>{"<"}</button>
        <div>{month + "   " + year}</div>
        <button onClick={nextMonth}>{">"}</button>
      </div>
      <div>
        <div className="w-24 justify-center flex flex-row gap-5">
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
          <div>SUN</div>
        </div>
        <div className="grid w-32 grid-cols-7 bg-black">
          {dates.map((x) => {
            return <CreateDates x={dates[x]} />;
          })}
        </div>
      </div>
    </div>
  );
}
