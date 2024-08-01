"use client"
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

export function InputWithButton({setsearchQuery}) {
  const theme = useMantineTheme();
  const handler = (e)=>{
    setsearchQuery(e.target.value)
  }
  return (
    <TextInput
    onChange={handler}
      radius="xl"
      size="md"
      placeholder="Search questions"
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: '18px', height: '18px' }} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight style={{ width: '18px', height: '18px' }} stroke={1.5} />
        </ActionIcon>
      }
      
    />
  );
}