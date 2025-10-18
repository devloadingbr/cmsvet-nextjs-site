/**
 * CONTENT EDITOR - Sistema Low-Code para Edição de Conteúdo
 * 
 * Permite editar textos diretamente no navegador em modo desenvolvimento
 * Ativa apenas em localhost
 */

export interface EditableContent {
  id: string;
  type: 'heading' | 'paragraph' | 'badge' | 'button' | 'list-item';
  section: string;
  originalText: string;
  currentText: string;
  selector: string;
}

export class ContentEditor {
  private isActive: boolean = false;
  private editableElements: Map<string, EditableContent> = new Map();
  private panel: HTMLElement | null = null;

  constructor() {
    // Ativa apenas em localhost
    this.isActive = typeof window !== 'undefined' && 
                    (window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1');
  }

  /**
   * Inicializa o editor
   */
  init() {
    if (!this.isActive) return;

    console.log('🎨 Content Editor ativado');
    this.createPanel();
    this.scanEditableContent();
    this.attachEventListeners();
  }

  /**
   * Cria o painel lateral
   */
  private createPanel() {
    const panel = document.createElement('div');
    panel.id = 'content-editor-panel';
    panel.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        right: -400px;
        width: 400px;
        height: 100vh;
        background: white;
        box-shadow: -4px 0 20px rgba(0,0,0,0.1);
        z-index: 99999;
        transition: right 0.3s ease;
        display: flex;
        flex-direction: column;
        font-family: system-ui, -apple-system, sans-serif;
      ">
        <!-- Header -->
        <div style="
          background: #1E5AA8;
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <div>
            <h3 style="margin: 0; font-size: 16px; font-weight: 600;">✏️ Content Editor</h3>
            <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.9;">Modo Desenvolvimento</p>
          </div>
          <button id="close-editor" style="
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 18px;
          ">×</button>
        </div>

        <!-- Content -->
        <div id="editor-content" style="
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        ">
          <p style="color: #7F8C8D; font-size: 14px; text-align: center; margin-top: 40px;">
            Clique em um elemento da página para editá-lo
          </p>
        </div>

        <!-- Footer -->
        <div style="
          padding: 16px;
          border-top: 1px solid #E8F4F8;
          display: flex;
          gap: 8px;
        ">
          <button id="save-changes" style="
            flex: 1;
            background: #27AE60;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
          ">💾 Salvar Alterações</button>
          <button id="reset-changes" style="
            background: #E8F4F8;
            color: #1E5AA8;
            border: none;
            padding: 12px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
          ">↺</button>
        </div>
      </div>

      <!-- Toggle Button -->
      <button id="toggle-editor" style="
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: #1E5AA8;
        color: white;
        border: none;
        padding: 16px 8px;
        border-radius: 6px 0 0 6px;
        cursor: pointer;
        z-index: 99998;
        font-size: 20px;
        box-shadow: -2px 2px 10px rgba(0,0,0,0.2);
        writing-mode: vertical-rl;
        font-weight: 600;
        letter-spacing: 2px;
      ">✏️ EDITOR</button>
    `;

    document.body.appendChild(panel);
    this.panel = panel;

    // Event listeners
    const toggleBtn = panel.querySelector('#toggle-editor') as HTMLElement;
    const closeBtn = panel.querySelector('#close-editor') as HTMLElement;
    const editorPanel = panel.querySelector('div') as HTMLElement;

    toggleBtn?.addEventListener('click', () => {
      const isOpen = editorPanel.style.right === '0px';
      editorPanel.style.right = isOpen ? '-400px' : '0px';
      toggleBtn.style.right = isOpen ? '0px' : '400px';
    });

    closeBtn?.addEventListener('click', () => {
      editorPanel.style.right = '-400px';
      toggleBtn.style.right = '0px';
    });

    // Save button
    panel.querySelector('#save-changes')?.addEventListener('click', () => {
      this.saveChanges();
    });

    // Reset button
    panel.querySelector('#reset-changes')?.addEventListener('click', () => {
      this.resetChanges();
    });
  }

  /**
   * Escaneia conteúdo editável na página
   */
  private scanEditableContent() {
    // Seleciona elementos editáveis
    const selectors = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p:not(button p)',
      '[class*="badge"]',
      'button span',
      'li'
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const text = htmlElement.textContent?.trim() || '';
        
        if (text && text.length > 0 && text.length < 500) {
          const id = `${selector}-${index}`;
          const section = this.findSection(htmlElement);
          
          this.editableElements.set(id, {
            id,
            type: this.getElementType(selector),
            section,
            originalText: text,
            currentText: text,
            selector: `${selector}:nth-of-type(${index + 1})`
          });

          // Adiciona indicador visual
          htmlElement.style.cursor = 'pointer';
          htmlElement.style.transition = 'outline 0.2s';
          
          htmlElement.addEventListener('mouseenter', () => {
            htmlElement.style.outline = '2px dashed #1E5AA8';
            htmlElement.style.outlineOffset = '4px';
          });

          htmlElement.addEventListener('mouseleave', () => {
            htmlElement.style.outline = 'none';
          });

          htmlElement.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showEditor(id, htmlElement);
          });
        }
      });
    });

    console.log(`📝 ${this.editableElements.size} elementos editáveis encontrados`);
  }

  /**
   * Identifica a seção do elemento
   */
  private findSection(element: HTMLElement): string {
    let current = element.parentElement;
    while (current) {
      if (current.tagName === 'SECTION') {
        const heading = current.querySelector('h2, h3');
        if (heading) return heading.textContent?.trim() || 'Sem título';
      }
      current = current.parentElement;
    }
    return 'Geral';
  }

  /**
   * Determina o tipo do elemento
   */
  private getElementType(selector: string): EditableContent['type'] {
    if (selector.startsWith('h')) return 'heading';
    if (selector.includes('badge')) return 'badge';
    if (selector.includes('button')) return 'button';
    if (selector === 'li') return 'list-item';
    return 'paragraph';
  }

  /**
   * Mostra editor para elemento específico
   */
  private showEditor(id: string, element: HTMLElement) {
    const content = this.editableElements.get(id);
    if (!content) return;

    const editorContent = this.panel?.querySelector('#editor-content');
    if (!editorContent) return;

    editorContent.innerHTML = `
      <div style="margin-bottom: 16px;">
        <div style="
          background: #E8F4F8;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          color: #1E5AA8;
          margin-bottom: 8px;
        ">
          📍 ${content.section} • ${content.type}
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <label style="
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #2C3E50;
          margin-bottom: 8px;
        ">Texto Original:</label>
        <div style="
          background: #F7FAFC;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
          color: #7F8C8D;
          border: 1px solid #E8F4F8;
        ">${content.originalText}</div>
      </div>

      <div style="margin-bottom: 16px;">
        <label style="
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #2C3E50;
          margin-bottom: 8px;
        ">Editar Texto:</label>
        <textarea id="edit-textarea" style="
          width: 100%;
          min-height: 120px;
          padding: 12px;
          border: 2px solid #E8F4F8;
          border-radius: 6px;
          font-size: 14px;
          font-family: inherit;
          resize: vertical;
          box-sizing: border-box;
        ">${content.currentText}</textarea>
      </div>

      <div style="display: flex; gap: 8px;">
        <button id="apply-edit" style="
          flex: 1;
          background: #1E5AA8;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
        ">✓ Aplicar</button>
        <button id="cancel-edit" style="
          background: #E8F4F8;
          color: #7F8C8D;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
        ">✕</button>
      </div>
    `;

    const textarea = editorContent.querySelector('#edit-textarea') as HTMLTextAreaElement;
    const applyBtn = editorContent.querySelector('#apply-edit');
    const cancelBtn = editorContent.querySelector('#cancel-edit');

    applyBtn?.addEventListener('click', () => {
      const newText = textarea.value.trim();
      if (newText) {
        element.textContent = newText;
        content.currentText = newText;
        this.editableElements.set(id, content);
        
        // Feedback visual
        element.style.background = '#FFF9E6';
        setTimeout(() => {
          element.style.background = '';
        }, 500);
      }
    });

    cancelBtn?.addEventListener('click', () => {
      editorContent.innerHTML = `
        <p style="color: #7F8C8D; font-size: 14px; text-align: center; margin-top: 40px;">
          Clique em um elemento da página para editá-lo
        </p>
      `;
    });

    textarea.focus();
  }

  /**
   * Salva alterações em JSON
   */
  private saveChanges() {
    const changes: Record<string, {
      section: string;
      type: string;
      original: string;
      updated: string;
    }> = {};
    let hasChanges = false;

    this.editableElements.forEach((content, id) => {
      if (content.currentText !== content.originalText) {
        changes[id] = {
          section: content.section,
          type: content.type,
          original: content.originalText,
          updated: content.currentText
        };
        hasChanges = true;
      }
    });

    if (hasChanges) {
      console.log('💾 Alterações detectadas:', changes);
      
      // Salva no localStorage
      localStorage.setItem('content-editor-changes', JSON.stringify(changes));
      
      // Download JSON
      const blob = new Blob([JSON.stringify(changes, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `content-changes-${Date.now()}.json`;
      a.click();
      
      alert('✅ Alterações salvas! Arquivo JSON baixado.');
    } else {
      alert('ℹ️ Nenhuma alteração detectada.');
    }
  }

  /**
   * Reseta todas as alterações
   */
  private resetChanges() {
    if (confirm('⚠️ Deseja resetar todas as alterações?')) {
      this.editableElements.forEach((content) => {
        const element = document.querySelector(content.selector);
        if (element) {
          element.textContent = content.originalText;
          content.currentText = content.originalText;
        }
      });
      
      localStorage.removeItem('content-editor-changes');
      alert('↺ Alterações resetadas!');
    }
  }

  /**
   * Anexa event listeners
   */
  private attachEventListeners() {
    // Atalho de teclado: Ctrl/Cmd + E
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        const toggleBtn = this.panel?.querySelector('#toggle-editor') as HTMLElement;
        toggleBtn?.click();
      }
    });
  }
}

// Singleton instance
let editorInstance: ContentEditor | null = null;

export function initContentEditor() {
  if (typeof window === 'undefined') return;
  
  if (!editorInstance) {
    editorInstance = new ContentEditor();
  }
  
  // Aguarda o DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      editorInstance?.init();
    });
  } else {
    editorInstance.init();
  }
}
