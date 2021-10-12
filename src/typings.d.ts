// TS ne zna da je scss file modul ako mu ne kazemo?
declare module "*.scss" {
  export const styles: { [className: string]: string };
  export default styles;
}
