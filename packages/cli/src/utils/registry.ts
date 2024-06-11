// TODO: get this value dynamically
export const ALL_COMPONENTS = [
  'Avatar',
  'Badge',
  'Button',
  'Card',
  'Checkbox',
  'Dialog',
  'Input',
  'RadioGroup',
  'Skeleton',
  'Switch',
  'Tabs',
  'Toast',
];
const baseUrl =
  'https://raw.githubusercontent.com/Mobilecn-UI/nativecn-ui/main';

export async function fetchComponents(components: string[]) {
  try {
    const fetchedComponents = await Promise.all(
      components.map(async component => {
        const response = await fetch(`${baseUrl}/components/${component}.tsx`);
        const content = await response.text();
        return {
          name: `${component}.tsx`,
          content,
        };
      })
    );

    return fetchedComponents;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch components from registry.`);
  }
}
