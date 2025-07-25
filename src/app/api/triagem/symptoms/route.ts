/**
 * API Route para buscar sintomas
 */

import { NextRequest, NextResponse } from 'next/server';
import { 
  SYMPTOMS_DATA, 
  getSymptomsByCategory, 
  getBasicSymptoms, 
  getExpandedSymptoms,
  searchSymptoms 
} from '@/lib/triagem/symptoms-data';
import { SYMPTOM_CATEGORIES } from '@/lib/triagem/constants';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const type = searchParams.get('type'); // 'basic' | 'expanded' | 'all'
    const search = searchParams.get('search');

    let symptoms = SYMPTOMS_DATA;

    // Filtrar por busca primeiro
    if (search && search.trim().length > 0) {
      symptoms = searchSymptoms(search.trim());
    }

    // Filtrar por tipo
    if (type === 'basic') {
      symptoms = symptoms.filter(s => s.isBasic);
    } else if (type === 'expanded') {
      symptoms = symptoms.filter(s => !s.isBasic);
    }

    // Filtrar por categoria
    if (category) {
      const validCategories = Object.values(SYMPTOM_CATEGORIES);
      if (validCategories.includes(category as 'respiratory' | 'digestive' | 'neurological' | 'physical' | 'behavioral' | 'skin' | 'eyes' | 'movement')) {
        symptoms = symptoms.filter(s => s.category === category);
      }
    }

    // Ordenar por: básicos primeiro, depois por nome
    symptoms.sort((a, b) => {
      if (a.isBasic && !b.isBasic) return -1;
      if (!a.isBasic && b.isBasic) return 1;
      return a.name.localeCompare(b.name, 'pt-BR');
    });

    return NextResponse.json({
      success: true,
      symptoms,
      total: symptoms.length,
      filters: {
        category: category || null,
        type: type || 'all',
        search: search || null,
      }
    });

  } catch (error) {
    console.error('Error in symptoms route:', error);

    return NextResponse.json(
      { 
        success: false, 
        error: 'Erro ao buscar sintomas',
        symptoms: [],
        total: 0 
      },
      { status: 500 }
    );
  }
}

// Endpoint para estatísticas dos sintomas
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === 'stats') {
      const basicSymptoms = getBasicSymptoms();
      const expandedSymptoms = getExpandedSymptoms();
      
      const statsByCategory = Object.values(SYMPTOM_CATEGORIES).map(category => ({
        category,
        total: getSymptomsByCategory(category).length,
        basic: getSymptomsByCategory(category).filter(s => s.isBasic).length,
        expanded: getSymptomsByCategory(category).filter(s => !s.isBasic).length,
      }));

      return NextResponse.json({
        success: true,
        stats: {
          total: SYMPTOMS_DATA.length,
          basic: basicSymptoms.length,
          expanded: expandedSymptoms.length,
          byCategory: statsByCategory,
        }
      });
    }

    return NextResponse.json(
      { success: false, error: 'Ação não reconhecida' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Error in symptoms POST route:', error);

    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Configurações do route
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';