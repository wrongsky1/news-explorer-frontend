export function getKeywordsText(n) {
    let text = '-и другим';
    if (n.toString().endsWith('1') && !n.toString().endsWith('11')) {
        text = '-му другому';
    } else if (n.toString().endsWith('2') && !n.toString().endsWith('12')) {
        text = '-м другим';
    } else if (n.toString().endsWith('3') && !n.toString().endsWith('13')) {
        text = '-м другим';
    } else if (n.toString().endsWith('4') && !n.toString().endsWith('14')) {
        text = '-м другим';
    }
    return text;
};
    
export function getSavedArticlesText(i) {
    if (i >= 5 || i === 0)
        return 'сохраненных статей';
    if (i > 1 && i < 5)
        return 'сохраненные статьи';
    if (i === 1)
        return 'сохраненная статья';
};

export function newDate(date) {
    const dateFormat = new Date(date);
    const monthList = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ];
    const year = dateFormat.getFullYear();
    const month = dateFormat.getMonth();
    const monthReally = monthList[month];
    const days = dateFormat.getDate();
    const newDate = `${days} ${monthReally}, ${year}`;
    return newDate;
};
