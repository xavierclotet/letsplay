export interface Layout {
  test?: string;
}

/**
 * A factory function that creates Layout
 * @param params
 */
export function createLayout(params: Partial<Layout>) {
  return {
  } as Layout;
}
