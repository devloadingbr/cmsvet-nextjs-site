/**
 * Tipos TypeScript para o Content Editor
 */

export interface EditableContent {
  id: string;
  type: 'heading' | 'paragraph' | 'badge' | 'button' | 'list-item';
  section: string;
  originalText: string;
  currentText: string;
  selector: string;
  element: HTMLElement;
}

export interface EditorConfig {
  /**
   * Diretório base para buscar arquivos editáveis
   * @default 'src/components'
   */
  componentsDir?: string;

  /**
   * Extensões de arquivo permitidas
   * @default ['.tsx', '.jsx']
   */
  allowedExtensions?: string[];

  /**
   * Cor primária do editor
   * @default '#1E5AA8'
   */
  primaryColor?: string;

  /**
   * Cor de destaque
   * @default '#F2B749'
   */
  accentColor?: string;

  /**
   * Ativar modo debug
   * @default false
   */
  debug?: boolean;

  /**
   * Seletores customizados para elementos editáveis
   * @default ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'button span', 'li']
   */
  customSelectors?: string[];
}

export interface ScanResult {
  id: string;
  text: string;
  filePath: string;
  lineNumber: number;
  context: string;
  type: 'jsx-text' | 'jsx-attribute' | 'string-literal';
}

export interface SaveRequest {
  filePath: string;
  oldContent: string;
  newContent: string;
}

export interface SaveResponse {
  success: boolean;
  message?: string;
  error?: string;
  filePath?: string;
  conflict?: boolean;
}
