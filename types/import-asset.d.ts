declare module "*.jpg" { const name: string; export default name; }
declare module "*.jpeg" { const name: string; export default name; }
declare module "*.png" { const name: string; export default name; }
declare module "*.gif" { const name: string; export default name; }
declare module "*.svg" { const name: string; export default name; }

declare module "*.css" { const content: Record<string, string>; export default content; }
declare module "*.scss" { const content: Record<string, string>; export default content; }
declare module "*.sass" { const content: Record<string, string>; export default content; }
