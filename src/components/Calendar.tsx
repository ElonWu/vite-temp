import { useCallback, useMemo, useState } from 'react';
import type { FC } from 'react';

import {
  startOfMonth,
  startOfISOWeek,
  lastDayOfMonth,
  lastDayOfISOWeek,
  isSameMonth,
  addMonths,
  isSameDay,
} from 'date-fns';

import Box from './Box';
import { IconArrowLeft, IconArrowRight } from '@douyinfe/semi-icons';
import { Button, IconButton } from '@douyinfe/semi-ui';

const Calendar = () => {
  const [monthAnchor, setMonthAnchor] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const days = useMemo((): IDay[] => {
    const firstDate = startOfISOWeek(startOfMonth(monthAnchor));
    const lastDate = lastDayOfISOWeek(lastDayOfMonth(monthAnchor));

    const days: IDay[] = [];

    for (
      let date = new Date(firstDate);
      date <= lastDate;
      date.setDate(date.getDate() + 1)
    ) {
      const curr = new Date(date);
      days.push({
        key: curr.getTime().toString(),
        date: curr,
        text: curr.getDate(),
        isSameMonth: isSameMonth(curr, monthAnchor),
        isActive: activeDate && isSameDay(curr, activeDate),
      });
    }

    return days;
  }, [monthAnchor, activeDate]);

  const { year, month } = useMemo(() => {
    const year = monthAnchor.getFullYear(),
      month = monthAnchor.getMonth() + 1;

    return { year, month };
  }, [monthAnchor]);

  const weekDays = useMemo(
    (): string[] => ['一', '二', '三', '四', '五', '六', '日'],
    [],
  );

  const updateMonth = useCallback((offset: number) => {
    setMonthAnchor((prev: Date) => addMonths(prev, offset));
  }, []);

  const onDayClick = useCallback(
    (day: IDay) => {
      setActiveDate(day.date);
    },
    [monthAnchor],
  );

  return (
    <Box className="Calendar inline-block my-auto">
      <div className="Calendar--month flex space-x-4 items-center justify-between">
        <IconButton
          theme="borderless"
          iconSize="extra-small"
          onClick={() => updateMonth(-1)}
          icon={<IconArrowLeft />}
        />

        <h4 className="text-fore-0 font-bold">
          {year} - {month}
        </h4>

        <IconButton
          theme="borderless"
          iconSize="extra-small"
          onClick={() => updateMonth(1)}
          icon={<IconArrowRight />}
        />
      </div>
      <div className="Calendar--weekdays grid grid-cols-7 gap-2 border-b mb-2 py-2">
        {weekDays.map((day) => (
          <p key={day} className="Calendar--weekday text-fore-1 font-semibold">
            {day}
          </p>
        ))}
      </div>

      <div className="Calendar--days grid grid-cols-7 gap-2">
        {days.map((day) => (
          <Day key={day.key} day={day} onClick={() => onDayClick(day)} />
        ))}
      </div>
    </Box>
  );
};

export interface IDay {
  key: string;
  date: Date;
  text: number;
  isSameMonth: boolean;
  isActive: boolean;
}

const Day: FC<{ day: IDay; onClick?: () => void; className?: string }> = ({
  day,
  className = '',
  ...rest
}) => {
  const cls = useMemo(() => {
    let cls = [
      // 命名
      'Calendar--Day',
      // 覆盖
      className,
      // 布局
      'w-8 h-8 flex items-center justify-center cursor-pointer transition',
      // 状态
      day.isActive
        ? 'rounded-full bg-primary-300 text-white'
        : day.isSameMonth
        ? 'text-fore-1 font-semibold'
        : 'text-fore-3',
    ];

    return cls.join(' ');
  }, [className, day.isSameMonth, day.isActive]);

  return (
    <div className={cls} {...rest}>
      {day.text}
    </div>
  );
};

export default Calendar;
