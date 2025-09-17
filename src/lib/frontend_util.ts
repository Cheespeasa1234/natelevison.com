export function since(year: number, month: string): string {
    const monthNumber = new Date(Date.parse(month + " 1, 1971")).getMonth();
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const monthsSinceChristThen = year * 12 + monthNumber;
    const monthsSinceChristNow = currentYear * 12 + currentMonth;
    const yearsBetween = (monthsSinceChristNow - monthsSinceChristThen) / 12;

    const since = yearsBetween - yearsBetween % 0.25;
    return since + " years";
}

export const generalSeoTags = "blog,article,search,programming,coding,code,java,web,webdev,web development,python,javascript,typescript";