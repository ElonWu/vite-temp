import { memo } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';

import { IconMoon, IconSun } from '@douyinfe/semi-icons';
import { Button } from '@douyinfe/semi-ui';

const DarkModeSwitch = memo(() => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button
      type="primary"
      theme="solid"
      circle
      size="large"
      onClick={toggleDarkMode}
      icon={isDarkMode ? <IconMoon /> : <IconSun />}
    />
  );
});

export default DarkModeSwitch;
