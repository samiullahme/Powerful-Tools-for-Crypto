import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Dynamic imports for all 25 tool components
const toolComponents: Record<string, ComponentType> = {
  'crypto-profit-calculator':    dynamic(() => import('@/components/tools/CryptoProfitCalculator')),
  'crypto-roi-calculator':       dynamic(() => import('@/components/tools/CryptoROICalculator')),
  'crypto-investment-calculator':dynamic(() => import('@/components/tools/CryptoInvestmentCalculator')),
  'crypto-tax-calculator':       dynamic(() => import('@/components/tools/CryptoTaxCalculator')),
  'crypto-portfolio-tracker':    dynamic(() => import('@/components/tools/CryptoPortfolioTracker')),
  'gst-calculator':              dynamic(() => import('@/components/tools/GSTCalculator')),
  'emi-calculator':              dynamic(() => import('@/components/tools/EMICalculator')),
  'sip-calculator':              dynamic(() => import('@/components/tools/SIPCalculator')),
  'salary-calculator':           dynamic(() => import('@/components/tools/SalaryCalculator')),
  'compound-interest-calculator':dynamic(() => import('@/components/tools/CompoundInterestCalculator')),
  'percentage-calculator':       dynamic(() => import('@/components/tools/PercentageCalculator')),
  'json-formatter':              dynamic(() => import('@/components/tools/JSONFormatter')),
  'base64-encoder':              dynamic(() => import('@/components/tools/Base64EncoderDecoder')),
  'uuid-generator':              dynamic(() => import('@/components/tools/UUIDGenerator')),
  'jwt-decoder':                 dynamic(() => import('@/components/tools/JWTDecoder')),
  'timestamp-converter':         dynamic(() => import('@/components/tools/TimestampConverter')),
  'password-generator':          dynamic(() => import('@/components/tools/PasswordGenerator')),
  'hash-generator':              dynamic(() => import('@/components/tools/HashGenerator')),
  'word-counter':                dynamic(() => import('@/components/tools/WordCounter')),
  'case-converter':              dynamic(() => import('@/components/tools/CaseConverter')),
  'remove-line-breaks':          dynamic(() => import('@/components/tools/RemoveLineBreaks')),
  'diff-checker':                dynamic(() => import('@/components/tools/DiffChecker')),
  'meta-generator':              dynamic(() => import('@/components/tools/MetaGenerator')),
  'robots-txt-generator':        dynamic(() => import('@/components/tools/RobotsTxtGenerator')),
  'age-calculator':              dynamic(() => import('@/components/tools/AgeCalculator')),

  // ─── D&D GENERATOR ENGINE MAPS ───
  'dnd-name-generator':          dynamic(() => import('@/components/tools/DNDGenerator')),
  'dnd-elf-name-generator':      dynamic(() => import('@/components/tools/DNDGenerator')),
  'dnd-tiefling-name-generator':  dynamic(() => import('@/components/tools/DNDGenerator')),
  'dnd-dragonborn-name-generator':dynamic(() => import('@/components/tools/DNDGenerator')),
  'dnd-human-name-generator':    dynamic(() => import('@/components/tools/DNDGenerator')),
  'dnd-goliath-name-generator':  dynamic(() => import('@/components/tools/DNDGenerator')),
  'dnd-wizard-name-generator':   dynamic(() => import('@/components/tools/DNDGenerator')),
  'dnd-bard-name-generator':     dynamic(() => import('@/components/tools/DNDGenerator')),
  'dnd-tavern-generator':        dynamic(() => import('@/components/tools/DNDGenerator')),
  'npc-name-generator':          dynamic(() => import('@/components/tools/DNDGenerator')),

  // ─── CHINESE NAME CONVERTER ENGINE MAPS ───
  'chinese-name-converter':      dynamic(() => import('@/components/tools/ChineseNameConverter')),
  'english-to-chinese-name':     dynamic(() => import('@/components/tools/ChineseNameConverter')),
  'chinese-to-english-name':     dynamic(() => import('@/components/tools/ChineseNameConverter')),
  'chinese-english-baby-names':  dynamic(() => import('@/components/tools/ChineseNameConverter')),
  'chinese-word-count-ratio':    dynamic(() => import('@/components/tools/ChineseNameConverter')),

  // ─── ROOM MAKEOVER ENGINE MAPS ───
  'room-makeover-planner':       dynamic(() => import('@/components/tools/RoomMakeoverPlanner')),
  'goth-room-makeover':          dynamic(() => import('@/components/tools/RoomMakeoverPlanner')),
  'teen-girl-room-makeover':     dynamic(() => import('@/components/tools/RoomMakeoverPlanner')),
  'room-makeover-budget-calculator': dynamic(() => import('@/components/tools/RoomMakeoverPlanner')),

  // ─── TEXT TRANSFORMATION TOOLS ───
  'italics-text-generator':      dynamic(() => import('@/components/tools/ItalicsGenerator')),
  'reverse-text-generator':      dynamic(() => import('@/components/tools/ReverseTextGenerator')),
  'reverse-words-generator':     dynamic(() => import('@/components/tools/ReverseTextGenerator')),
  'strikethrough-text-generator':dynamic(() => import('@/components/tools/StrikethroughGenerator')),
  'superscript-generator':       dynamic(() => import('@/components/tools/SuperscriptGenerator')),
  'caps-lock-generator':         dynamic(() => import('@/components/tools/TextTransformer')),
  'wide-text-generator':         dynamic(() => import('@/components/tools/TextTransformer')),
  'mirror-text-generator':       dynamic(() => import('@/components/tools/TextTransformer')),
  'text-flip-generator':         dynamic(() => import('@/components/tools/TextTransformer')),
  'alphabetical-order-sorter':   dynamic(() => import('@/components/tools/TextSorter')),
  'number-sorter':               dynamic(() => import('@/components/tools/TextSorter')),
  'fake-word-generator':         dynamic(() => import('@/components/tools/FakeWordGenerator')),
};

export function getToolComponent(slug: string): ComponentType | null {
  return toolComponents[slug] || null;
}
