import { memo } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';

import { IconMoon, IconSun } from '@douyinfe/semi-icons';
import { Button } from '@douyinfe/semi-ui';

const DarkModeSwitch = memo(() => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <Button
      type="primary"
      circle
      size="large"
      onClick={toggleDarkMode}
      icon={!isDark ? <IconSun /> : <IconMoon />}
    />
  );
});

export default DarkModeSwitch;
