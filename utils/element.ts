export const getElementByName = (
  name: string,
  parent: HTMLElement | Document = document
): HTMLElement | null => {
  return parent.querySelector(`[name="${name}"]`);
};

export default {};
