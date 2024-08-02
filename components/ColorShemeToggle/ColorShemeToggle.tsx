'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="default"
      color={colorScheme === 'dark' ? 'white' : 'black'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme">
      {colorScheme === 'dark' ? <IconSun size="1.25rem" /> : <IconMoon size="1.25rem" />}
    </ActionIcon>
  );
}