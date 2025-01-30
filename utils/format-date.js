export function getShamsiDate(uDate, option) {
    // let d = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
    let d = new Date(uDate).toLocaleDateString("fa-IR");
    return d;
  }