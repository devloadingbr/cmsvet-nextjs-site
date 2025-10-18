/**
 * CONTENT EDITOR ADVANCED - Edita código-fonte diretamente
 * 
 * ATENÇÃO: Modifica arquivos .tsx reais no disco
 * Ativa apenas em localhost + desenvolvimento
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

export class ContentEditorAdvanced {
  private isActive: boolean = false;
  private editableElements: Map<string, EditableContent> = new Map();
  private panel: HTMLElement | null = null;
  private isSaving: boolean = false;

  constructor() {
    this.isActive = typeof window !== 'undefined' && 
                    (window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1');
  }

  init() {
    if (!this.isActive) return;

    console.log('🎨 Content Editor Advanced ativado - SALVA NO CÓDIGO!');
    this.createPanel();
    this.scanEditableContent();
    this.attachEventListeners();
  }

  private createPanel() {
    const panel = document.createElement('div');
    panel.id = 'content-editor-panel';
    panel.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        right: -450px;
        width: 450px;
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
          background: linear-gradient(135deg, #1E5AA8 0%, #164A8C 100%);
          color: white;
          padding: 20px;
        ">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
            <div>
              <h3 style="margin: 0; font-size: 18px; font-weight: 700;">✏️ Content Editor</h3>
              <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Advanced Mode</p>
            </div>
            <button id="close-editor" style="
              background: rgba(255,255,255,0.2);
              border: none;
              color: white;
              width: 32px;
              height: 32px;
              border-radius: 6px;
              cursor: pointer;
              font-size: 20px;
              transition: background 0.2s;
            ">×</button>
          </div>
          <div style="
            background: rgba(255,255,255,0.15);
            padding: 10px 12px;
            border-radius: 6px;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
          ">
            <span style="font-size: 16px;">⚠️</span>
            <span><strong>ATENÇÃO:</strong> Alterações modificam o código-fonte!</span>
          </div>
        </div>

        <!-- Content -->
        <div id="editor-content" style="
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        ">
          <div style="
            text-align: center;
            padding: 60px 20px;
            color: #7F8C8D;
          ">
            <div style="font-size: 48px; margin-bottom: 16px;">👆</div>
            <p style="font-size: 15px; line-height: 1.6; margin: 0;">
              Clique em qualquer texto da página para editá-lo
            </p>
            <p style="font-size: 13px; margin-top: 8px; opacity: 0.7;">
              As alterações serão salvas diretamente no código
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="
          padding: 16px 20px;
          border-top: 1px solid #E8F4F8;
          background: #F7FAFC;
        ">
          <button id="save-to-code" style="
            width: 100%;
            background: #27AE60;
            color: white;
            border: none;
            padding: 14px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 700;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: background 0.2s;
          " disabled>
            <span style="font-size: 18px;">💾</span>
            <span>Salvar no Código-Fonte</span>
          </button>
          <div id="save-status" style="
            margin-top: 12px;
            padding: 10px;
            border-radius: 6px;
            font-size: 13px;
            text-align: center;
            display: none;
          "></div>
        </div>
      </div>

      <!-- Toggle Button -->
      <button id="toggle-editor" style="
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: linear-gradient(135deg, #1E5AA8 0%, #164A8C 100%);
        color: white;
        border: none;
        padding: 20px 10px;
        border-radius: 8px 0 0 8px;
        cursor: pointer;
        z-index: 99998;
        font-size: 14px;
        box-shadow: -3px 3px 15px rgba(0,0,0,0.3);
        writing-mode: vertical-rl;
        font-weight: 700;
        letter-spacing: 2px;
        transition: all 0.3s;
      ">✏️ EDITOR</button>
    `;

    document.body.appendChild(panel);
    this.panel = panel;

    this.setupPanelEvents();
  }

  private setupPanelEvents() {
    if (!this.panel) return;

    const toggleBtn = this.panel.querySelector('#toggle-editor') as HTMLElement;
    const closeBtn = this.panel.querySelector('#close-editor') as HTMLElement;
    const editorPanel = this.panel.querySelector('div') as HTMLElement;
    const saveBtn = this.panel.querySelector('#save-to-code') as HTMLButtonElement;

    toggleBtn?.addEventListener('click', () => {
      const isOpen = editorPanel.style.right === '0px';
      editorPanel.style.right = isOpen ? '-450px' : '0px';
      toggleBtn.style.right = isOpen ? '0px' : '450px';
    });

    closeBtn?.addEventListener('click', () => {
      editorPanel.style.right = '-450px';
      toggleBtn.style.right = '0px';
    });

    closeBtn?.addEventListener('mouseenter', () => {
      closeBtn.style.background = 'rgba(255,255,255,0.3)';
    });

    closeBtn?.addEventListener('mouseleave', () => {
      closeBtn.style.background = 'rgba(255,255,255,0.2)';
    });

    saveBtn?.addEventListener('click', () => {
      this.saveToSourceCode();
    });
  }

  private scanEditableContent() {
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
            selector: `${selector}:nth-of-type(${index + 1})`,
            element: htmlElement
          });

          this.makeElementEditable(htmlElement, id);
        }
      });
    });

    console.log(`📝 ${this.editableElements.size} elementos editáveis encontrados`);
  }

  private makeElementEditable(element: HTMLElement, id: string) {
    element.style.cursor = 'pointer';
    element.style.transition = 'all 0.2s';
    
    element.addEventListener('mouseenter', () => {
      element.style.outline = '2px dashed #1E5AA8';
      element.style.outlineOffset = '4px';
      element.style.background = 'rgba(30, 90, 168, 0.05)';
    });

    element.addEventListener('mouseleave', () => {
      element.style.outline = 'none';
      element.style.background = '';
    });

    element.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showEditor(id);
    });
  }

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

  private getElementType(selector: string): EditableContent['type'] {
    if (selector.startsWith('h')) return 'heading';
    if (selector.includes('badge')) return 'badge';
    if (selector.includes('button')) return 'button';
    if (selector === 'li') return 'list-item';
    return 'paragraph';
  }

  private showEditor(id: string) {
    const content = this.editableElements.get(id);
    if (!content) return;

    const editorContent = this.panel?.querySelector('#editor-content');
    const saveBtn = this.panel?.querySelector('#save-to-code') as HTMLButtonElement;
    
    if (!editorContent) return;

    editorContent.innerHTML = `
      <div style="margin-bottom: 20px;">
        <div style="
          background: linear-gradient(135deg, #E8F4F8 0%, #D4E9F7 100%);
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          color: #1E5AA8;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        ">
          <span>📍</span>
          <span>${content.section} • ${content.type}</span>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <label style="
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #2C3E50;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        ">Texto Original:</label>
        <div style="
          background: #F7FAFC;
          padding: 14px;
          border-radius: 8px;
          font-size: 14px;
          color: #7F8C8D;
          border: 2px solid #E8F4F8;
          line-height: 1.6;
        ">${content.originalText}</div>
      </div>

      <div style="margin-bottom: 20px;">
        <label style="
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #2C3E50;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        ">Novo Texto:</label>
        <textarea id="edit-textarea" style="
          width: 100%;
          min-height: 140px;
          padding: 14px;
          border: 2px solid #1E5AA8;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          resize: vertical;
          box-sizing: border-box;
          line-height: 1.6;
          transition: border-color 0.2s;
        ">${content.currentText}</textarea>
      </div>

      <div style="display: flex; gap: 10px;">
        <button id="apply-edit" style="
          flex: 1;
          background: #1E5AA8;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          transition: background 0.2s;
        ">✓ Aplicar Preview</button>
        <button id="cancel-edit" style="
          background: #E8F4F8;
          color: #7F8C8D;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.2s;
        ">✕</button>
      </div>

      <div style="
        margin-top: 16px;
        padding: 12px;
        background: #FFF9E6;
        border-left: 4px solid #F2B749;
        border-radius: 4px;
        font-size: 12px;
        color: #2C3E50;
        line-height: 1.5;
      ">
        <strong>💡 Dica:</strong> Clique em "Aplicar Preview" para ver a mudança. 
        Depois clique em "Salvar no Código-Fonte" para persistir.
      </div>
    `;

    const textarea = editorContent.querySelector('#edit-textarea') as HTMLTextAreaElement;
    const applyBtn = editorContent.querySelector('#apply-edit');
    const cancelBtn = editorContent.querySelector('#cancel-edit');

    textarea?.focus();

    applyBtn?.addEventListener('click', () => {
      const newText = textarea.value.trim();
      if (newText && newText !== content.currentText) {
        content.element.textContent = newText;
        content.currentText = newText;
        this.editableElements.set(id, content);
        
        // Feedback visual
        content.element.style.background = '#FFF9E6';
        content.element.style.outline = '2px solid #F2B749';
        setTimeout(() => {
          content.element.style.background = '';
          content.element.style.outline = '';
        }, 1000);

        // Habilita botão de salvar
        if (saveBtn) {
          saveBtn.disabled = false;
          saveBtn.style.opacity = '1';
          saveBtn.style.cursor = 'pointer';
        }

        this.showStatus('✓ Preview aplicado! Clique em "Salvar" para persistir.', 'success');
      }
    });

    applyBtn?.addEventListener('mouseenter', (e) => {
      (e.target as HTMLElement).style.background = '#164A8C';
    });

    applyBtn?.addEventListener('mouseleave', (e) => {
      (e.target as HTMLElement).style.background = '#1E5AA8';
    });

    cancelBtn?.addEventListener('click', () => {
      editorContent.innerHTML = `
        <div style="
          text-align: center;
          padding: 60px 20px;
          color: #7F8C8D;
        ">
          <div style="font-size: 48px; margin-bottom: 16px;">👆</div>
          <p style="font-size: 15px; line-height: 1.6; margin: 0;">
            Clique em qualquer texto da página para editá-lo
          </p>
        </div>
      `;
    });

    cancelBtn?.addEventListener('mouseenter', (e) => {
      (e.target as HTMLElement).style.background = '#D4E9F7';
    });

    cancelBtn?.addEventListener('mouseleave', (e) => {
      (e.target as HTMLElement).style.background = '#E8F4F8';
    });
  }

  private async saveToSourceCode() {
    if (this.isSaving) return;

    const changes: Array<{ original: string; updated: string }> = [];
    
    this.editableElements.forEach((content) => {
      if (content.currentText !== content.originalText) {
        changes.push({
          original: content.originalText,
          updated: content.currentText
        });
      }
    });

    if (changes.length === 0) {
      this.showStatus('ℹ️ Nenhuma alteração para salvar', 'info');
      return;
    }

    this.isSaving = true;
    this.showStatus('⏳ Salvando alterações no código...', 'loading');

    try {
      // Salva cada alteração
      for (const change of changes) {
        await this.saveChange(change.original, change.updated);
      }

      this.showStatus(`✅ ${changes.length} alteração(ões) salva(s) no código!`, 'success');
      
      // Atualiza os textos originais
      this.editableElements.forEach((content) => {
        content.originalText = content.currentText;
      });

      // Desabilita botão de salvar
      const saveBtn = this.panel?.querySelector('#save-to-code') as HTMLButtonElement;
      if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.style.opacity = '0.5';
      }

      // Recarrega página após 2 segundos
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error('Erro ao salvar:', error);
      this.showStatus('❌ Erro ao salvar. Veja o console.', 'error');
    } finally {
      this.isSaving = false;
    }
  }

  private async saveChange(oldText: string, newText: string): Promise<void> {
    // Primeiro, busca onde está o texto no código
    const scanResponse = await fetch(`/api/content-editor/scan?text=${encodeURIComponent(oldText)}`);
    const scanData = await scanResponse.json();

    if (!scanData.success || scanData.results.length === 0) {
      throw new Error(`Texto não encontrado no código: ${oldText}`);
    }

    // Pega o primeiro resultado (pode haver múltiplos)
    const result = scanData.results[0];

    // Salva a alteração
    const saveResponse = await fetch('/api/content-editor/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filePath: result.filePath,
        oldContent: oldText,
        newContent: newText
      })
    });

    const saveData = await saveResponse.json();

    if (!saveData.success) {
      throw new Error(saveData.error || 'Erro ao salvar');
    }
  }

  private showStatus(message: string, type: 'success' | 'error' | 'info' | 'loading') {
    const statusDiv = this.panel?.querySelector('#save-status') as HTMLElement;
    if (!statusDiv) return;

    const colors = {
      success: { bg: '#D4EDDA', text: '#155724', border: '#27AE60' },
      error: { bg: '#F8D7DA', text: '#721C24', border: '#E74C3C' },
      info: { bg: '#D1ECF1', text: '#0C5460', border: '#17A2B8' },
      loading: { bg: '#FFF9E6', text: '#856404', border: '#F2B749' }
    };

    const color = colors[type];

    statusDiv.style.display = 'block';
    statusDiv.style.background = color.bg;
    statusDiv.style.color = color.text;
    statusDiv.style.borderLeft = `4px solid ${color.border}`;
    statusDiv.textContent = message;

    if (type !== 'loading') {
      setTimeout(() => {
        statusDiv.style.display = 'none';
      }, 5000);
    }
  }

  private attachEventListeners() {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        const toggleBtn = this.panel?.querySelector('#toggle-editor') as HTMLElement;
        toggleBtn?.click();
      }
    });
  }
}

let editorInstance: ContentEditorAdvanced | null = null;

export function initContentEditorAdvanced() {
  if (typeof window === 'undefined') return;
  
  if (!editorInstance) {
    editorInstance = new ContentEditorAdvanced();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      editorInstance?.init();
    });
  } else {
    editorInstance.init();
  }
}
