'use client';

import React, { useState, ChangeEvent } from 'react';
import { useI18n } from '@/i18nContext';

type DojoCount = '1' | '2' | '3';
type ParticipantType = 'u18' | 'adult';

// 利益率（必要に応じてここを 0.25 などに変えれば全体が変わります）
const PROFIT_MARGIN = 0.3;

/**
 * 元の表に記載されている「保険料」列。
 * 想定：各日数プラン（1〜31日）に対する保険料の合計金額。
 */
const INSURANCE_PER_DAY: { [day: number]: number } = {
  1: 800,
  2: 1220,
  3: 1620,
  4: 1950,
  5: 2300,
  6: 2650,
  7: 2960,
  8: 3260,
  9: 3520,
  10: 3790,
  11: 4060,
  12: 4330,
  13: 4620,
  14: 4870,
  15: 5090,
  16: 9420,
  17: 5450,
  18: 9420,
  19: 5950,
  20: 9420,
  21: 6470,
  22: 9420,
  23: 7010,
  24: 9420,
  25: 7580,
  26: 9420,
  27: 8140,
  28: 9420,
  29: 8720,
  30: 9420,
  31: 9420,
};

/**
 * 1日あたりの人件費（2,000円 × 時間数）
 * 1拠点：3時間 → 6,000円
 * 2拠点：6時間 → 12,000円
 * 3拠点：9時間 → 18,000円
 */
const LABOUR_COST_PER_DAY: Record<DojoCount, number> = {
  '1': 6000,
  '2': 12000,
  '3': 18000,
};

/**
 * 1日あたりの施設利用料
 * 1拠点：1,000円/日
 * 2拠点：2,000円/日
 * 3拠点：3,000円/日
 */
const USAGE_FEE_PER_DAY: Record<DojoCount, number> = {
  '1': 1000,
  '2': 2000,
  '3': 3000,
};

function formatYen(value: number): string {
  return value.toLocaleString('ja-JP') + '円';
}

function formatPercent(value: number): string {
  return (value * 100).toFixed(1) + '%';
}

/**
 * プラン全体のコスト計算
 *
 * 想定ロジック：
 * - 保険料は「日数プラン全体」で固定（INSURANCE_PER_DAY[d]）
 * - 人件費は「1日あたり × 日数」
 * - 施設利用料は「1日あたり × 日数」
 */
function calcPlanCost(days: number, dojoCount: DojoCount) {
  const insurance = INSURANCE_PER_DAY[days] ?? 0;
  const labour = LABOUR_COST_PER_DAY[dojoCount] * days;
  const usageFee = USAGE_FEE_PER_DAY[dojoCount] * days;
  const totalCost = insurance + labour + usageFee;
  return { insurance, labour, usageFee, totalCost };
}

/**
 * 利益率30%になるような販売価格を算出
 *
 * (price - cost) / price = PROFIT_MARGIN
 * → price = cost / (1 - PROFIT_MARGIN)
 *
 * 表示上は10円単位で丸める。
 */
function calcPlanPrice(days: number, dojoCount: DojoCount) {
  const { insurance, labour, usageFee, totalCost } = calcPlanCost(days, dojoCount);

  if (!INSURANCE_PER_DAY[days]) {
    return {
      totalPrice: 0,
      insurance,
      labour,
      usageFee,
      profit: 0,
      margin: 0,
    };
  }

  const rawPrice = totalCost / (1 - PROFIT_MARGIN);
  const roundedPrice = Math.round(rawPrice / 10) * 10;
  const profit = roundedPrice - totalCost;
  const margin = roundedPrice > 0 ? profit / roundedPrice : 0;

  return {
    totalPrice: roundedPrice,
    insurance,
    labour,
    usageFee,
    profit,
    margin,
  };
}

/**
 * メインコンポーネント
 */
export function JudoPlanCalculator() {
  const { t } = useI18n();
  const [days, setDays] = useState<number | ''>(1);
  const [dojoCount, setDojoCount] = useState<DojoCount>('1');
  const [participantType, setParticipantType] = useState<ParticipantType>('u18');

  const handleDaysChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === '') {
      setDays('');
      return;
    }
    const numValue = Number(value);
    if (Number.isNaN(numValue)) return;
    if (numValue < 0 || numValue > 31) return;
    setDays(numValue);
  };

  const handleDojoCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as DojoCount;
    setDojoCount(value);
  };

  const handleParticipantTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as ParticipantType;
    setParticipantType(value);
  };

  // Convert days to number (0 if empty or 0)
  const daysNum = days === '' || days === 0 ? 0 : days;
  
  const { totalPrice, insurance, labour, usageFee, profit, margin } = calcPlanPrice(
    daysNum,
    dojoCount
  );

  const isValid = daysNum > 0 && !!INSURANCE_PER_DAY[daysNum];

  return (
    <div
      style={{
        maxWidth: 600,
        margin: '0 auto',
        padding: '24px',
        borderRadius: '16px',
        border: '2px solid #dc2626',
        boxShadow: '0 4px 12px rgba(220, 38, 38, 0.15)',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          marginBottom: '4px',
          color: '#dc2626',
        }}
      >
        {t('calculator.title')}
      </h2>
      <div style={{ width: '48px', height: '2px', backgroundColor: '#dc2626', marginBottom: '12px' }}></div>
      <p style={{ fontSize: '0.9rem', color: '#333333', marginBottom: '20px' }}>
        {t('calculator.description')}
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* 入力エリア */}
        <div>
          {/* 日数 */}
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="days"
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '4px',
                color: '#000000',
              }}
            >
              {t('calculator.days')}
            </label>
            <input
              id="days"
              type="number"
              min={0}
              max={31}
              value={days}
              onChange={handleDaysChange}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: '8px',
                border: '2px solid #000000',
                fontSize: '0.95rem',
                transition: 'all 0.3s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#dc2626';
                e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#000000';
                e.target.style.boxShadow = 'none';
              }}
            />
            <small style={{ fontSize: '0.75rem', color: '#4a4a4a' }}>
              {t('calculator.days_hint')}
            </small>
          </div>

          {/* 道場数 */}
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="dojoCount"
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '4px',
                color: '#000000',
              }}
            >
              {t('calculator.dojo_count')}
            </label>
            <select
              id="dojoCount"
              value={dojoCount}
              onChange={handleDojoCountChange}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: '8px',
                border: '2px solid #000000',
                fontSize: '0.95rem',
                transition: 'all 0.3s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#dc2626';
                e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#000000';
                e.target.style.boxShadow = 'none';
              }}
            >
              <option value="1">1 {t('calculator.dojo_suffix').trim()}</option>
              <option value="2">2 {t('calculator.dojo_suffix').trim()}</option>
              <option value="3">3 {t('calculator.dojo_suffix').trim()}</option>
            </select>
          </div>

          {/* 参加者区分 */}
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '4px',
                color: '#000000',
              }}
            >
              {t('calculator.participant_type')}
            </span>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
              }}
            >
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input
                  type="radio"
                  name="participantType"
                  value="u18"
                  checked={participantType === 'u18'}
                  onChange={handleParticipantTypeChange}
                />
                <span>{t('calculator.u18')}</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input
                  type="radio"
                  name="participantType"
                  value="adult"
                  checked={participantType === 'adult'}
                  onChange={handleParticipantTypeChange}
                />
                <span>{t('calculator.adult')}</span>
              </label>
            </div>
            <small style={{ fontSize: '0.75rem', color: '#4a4a4a' }}>
              {t('calculator.participant_note')}
            </small>
          </div>

          {/* 選択内容の要約 */}
          <div
            style={{
              marginTop: '8px',
              padding: '10px 12px',
              borderRadius: '10px',
              backgroundColor: '#f9fafb',
              fontSize: '0.85rem',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4, color: '#dc2626' }}>{t('calculator.selected_plan')}</div>
            <div style={{ color: '#000000' }}>{t('calculator.days_label')} {days === '' ? t('calculator.days_empty') : `${days}${t('calculator.days_suffix')}`}</div>
            <div style={{ color: '#000000' }}>{t('calculator.dojo_label')} {dojoCount} {t('calculator.dojo_suffix').trim()}</div>
            <div style={{ color: '#000000' }}>
              {t('calculator.participant_label')} {participantType === 'u18' ? t('calculator.u18') : t('calculator.adult')}
            </div>
          </div>
        </div>

        {/* 計算結果エリア */}
        <div
          style={{
            padding: '20px',
            borderRadius: '12px',
            background:
              'linear-gradient(135deg, rgba(220, 38, 38, 0.08), rgba(220, 38, 38, 0.03))',
            border: '2px solid #dc2626',
            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.15)',
          }}
        >
          <div style={{ marginBottom: '12px' }}>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#dc2626',
                marginBottom: '8px',
              }}
            >
              {t('calculator.price_label')}
            </div>
            {daysNum === 0 || days === '' ? (
              <div>
                <div
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#333333',
                    marginBottom: '4px',
                  }}
                >
                  {formatYen(0)}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: '#333333',
                  }}
                >
                  {t('calculator.enter_days')}
                </div>
              </div>
            ) : !isValid ? (
              <div style={{ color: '#dc2626', fontSize: '0.9rem', fontWeight: 600 }}>
                {t('calculator.invalid_days')}
              </div>
            ) : (
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#dc2626',
                    textShadow: '0 2px 4px rgba(220, 38, 38, 0.2)',
                  }}
                >
                  {formatYen(totalPrice)}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
