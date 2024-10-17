import type { Meta, StoryObj } from '@storybook/react';
import { Table, Td, Th } from '.';

const meta: Meta<typeof Table> = {
  title: 'common/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <thead>
        <tr>
          <Th>heading 1</Th>
          <Th>heading 2</Th>
          <Th>heading 3</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>data 1</Td>
          <Td>data 2</Td>
          <Td>data 3</Td>
        </tr>
        <tr>
          <Td>data 4</Td>
          <Td>data 5</Td>
          <Td>data 6</Td>
        </tr>
      </tbody>
    </Table>
  ),
};
