export interface IFont {
  roboto: string;  
  poppins: string;
  montserrat: string;  
}

export type Font = 'roboto' | 'poppins' | 'montserrat';

const font: IFont = {
  roboto: 'Roboto',
  poppins: 'Poppins',
  montserrat: 'Montserrat',
};

export { font };